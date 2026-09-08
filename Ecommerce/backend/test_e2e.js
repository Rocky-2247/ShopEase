const BASE_URL = 'http://localhost:5000/api';

const runTests = async () => {
  console.log('🧪 Starting ShopEase Commercial E-Commerce E2E Validation...\n');
  let passed = 0;
  let failed = 0;

  const assert = (condition, title) => {
    if (condition) {
      console.log(`  ✅ [PASS] ${title}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL] ${title}`);
      failed++;
    }
  };

  try {
    // 1. Health Check
    const healthRes = await fetch(`${BASE_URL}/health`).then((r) => r.json());
    assert(healthRes.status === 'online', 'Health endpoint status is online');

    // 2. Customer Authentication
    const loginRes = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'user@shopease.com', password: 'User@123' })
    }).then((r) => r.json());

    assert(loginRes.success && loginRes.data.token, 'Customer login successful and returned JWT');
    const userToken = loginRes.data.token;

    // 3. Admin Authentication
    const adminLoginRes = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@shopease.com', password: 'Admin@123' })
    }).then((r) => r.json());

    assert(adminLoginRes.success && adminLoginRes.data.role === 'admin', 'Admin login successful with admin role');
    const adminToken = adminLoginRes.data.token;

    // 4. Products with Variants Fetch
    const productsRes = await fetch(`${BASE_URL}/products?page=1&limit=10`).then((r) => r.json());
    assert(productsRes.success && productsRes.data.products.length > 0, `Fetched ${productsRes.data.products.length} products from catalog`);
    const testProduct = productsRes.data.products[0];

    const prodDetailRes = await fetch(`${BASE_URL}/products/${testProduct.id}`).then((r) => r.json());
    assert(prodDetailRes.success, `Fetched detailed product with variants: "${prodDetailRes.data.name}"`);

    // 5. Customer Photo Review Submission
    const reviewRes = await fetch(`${BASE_URL}/reviews/product/${testProduct.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        rating: 5,
        comment: 'Verified purchaser review with attached unboxing photo!',
        image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
      })
    }).then((r) => r.json());
    assert(reviewRes.success, 'Customer photo review successfully posted');

    // 6. Cart & Coupon Operations
    const addCartRes = await fetch(`${BASE_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({ product_id: testProduct.id, quantity: 3 })
    }).then((r) => r.json());
    assert(addCartRes.success, 'Added product to customer shopping cart');

    const getCartRes = await fetch(`${BASE_URL}/cart`, {
      headers: { Authorization: `Bearer ${userToken}` }
    }).then((r) => r.json());
    assert(getCartRes.success && getCartRes.data.items.length > 0, `Cart retrieved with subtotal: $${getCartRes.data.subtotal}`);

    const couponRes = await fetch(`${BASE_URL}/payment/validate-coupon`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 'SAVE10', order_amount: getCartRes.data.subtotal })
    }).then((r) => r.json());
    assert(couponRes.success && couponRes.data.discount_amount > 0, `Coupon "SAVE10" applied (Saved: $${couponRes.data.discount_amount})`);

    // 6.5. Payment Gateway Order Creation & Verification
    const createPayRes = await fetch(`${BASE_URL}/payment/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({ amount: 1499.00, currency: 'INR' })
    }).then((r) => r.json());
    assert(createPayRes.success && createPayRes.data.order_id, `Payment Gateway Order created: ${createPayRes.data.order_id} (Mode: ${createPayRes.mode})`);

    const verifyPayRes = await fetch(`${BASE_URL}/payment/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        razorpay_order_id: createPayRes.data.order_id,
        razorpay_payment_id: `pay_test_${Date.now()}`,
        payment_method: 'UPI'
      })
    }).then((r) => r.json());
    assert(verifyPayRes.success && verifyPayRes.data.payment_id, `Payment Gateway Verified: ${verifyPayRes.data.payment_id}`);

    // 7. Order Placement with Loyalty Points
    const orderRes = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        items: [{ product_id: testProduct.id, quantity: 1 }],
        shipping_address: {
          full_name: 'Alex Johnson',
          phone: '+1 987 654 3210',
          street: '742 Evergreen Terrace',
          city: 'Springfield',
          state: 'Oregon',
          pincode: '97477'
        },
        payment_method: 'UPI',
        coupon_code: 'SAVE10',
        payment_id: verifyPayRes.data.payment_id,
        redeem_points: 50
      })
    }).then((r) => r.json());

    assert(orderRes.success && orderRes.data.order_number, `Order #${orderRes.data?.order_number} placed (Earned ${orderRes.earned_points} points)`);
    const createdOrder = orderRes.data;

    // 8. Payment Webhook Listener
    const webhookRes = await fetch(`${BASE_URL}/webhooks/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'payment.captured',
        payload: {
          order_id: createdOrder.order_number,
          payment_id: `pay_wh_${Date.now()}`
        }
      })
    }).then((r) => r.json());
    assert(webhookRes.status === 'ok', 'Payment webhook listener verified and processed successfully');

    // 9. PDF Tax Invoice Stream
    const invoiceRes = await fetch(`${BASE_URL}/orders/${createdOrder.id}/invoice`, {
      headers: { Authorization: `Bearer ${userToken}` }
    });
    const contentType = invoiceRes.headers.get('content-type');
    assert(invoiceRes.status === 200 && contentType.includes('pdf'), 'Tax Invoice PDF streamed with attached styles');

    // 10. Admin Overview & Status Update
    const adminStatsRes = await fetch(`${BASE_URL}/admin/dashboard`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    }).then((r) => r.json());
    assert(adminStatsRes.success && adminStatsRes.data.metrics.totalOrders > 0, `Admin Dashboard loaded: Revenue $${adminStatsRes.data?.metrics?.totalRevenue}`);

    // 11. Brands Spotlight & Catalog Metadata
    const brandsRes = await fetch(`${BASE_URL}/products/brands`).then((r) => r.json());
    assert(brandsRes.success && brandsRes.data.length >= 10 && brandsRes.data[0].coupon, `Dynamic Brands API returned ${brandsRes.data?.length} brands with coupon metadata`);

    // 12. Newsletter Subscription
    const newsletterRes = await fetch(`${BASE_URL}/auth/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'subscriber@example.com' })
    }).then((r) => r.json());
    assert(newsletterRes.success && newsletterRes.coupon, `Newsletter subscribed with dynamic coupon "${newsletterRes.coupon}"`);

    console.log(`\n🎉 Commercial E-Commerce Test Suite Completed: ${passed} Passed, ${failed} Failed\n`);
  } catch (error) {
    console.error('❌ Test execution error:', error);
  }
};

runTests();
