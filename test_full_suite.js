import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/api';
let customerToken = '';
let adminToken = '';
let customerId = null;
let testProductId = null;
let createdOrderId = null;
let createdOrderNumber = null;
const guestSessionId = 'guest_e2e_' + Date.now();

const results = [];

function record(name, passed, detail = '', err = null) {
  const errMsg = err?.response?.data?.message || err?.message || '';
  const finalDetail = detail ? detail : (errMsg ? `Error: ${errMsg}` : '');
  results.push({ name, passed, detail: finalDetail });
  const icon = passed ? '✅' : '❌';
  console.log(`${icon} [${passed ? 'PASS' : 'FAIL'}] ${name} ${finalDetail ? '(' + finalDetail + ')' : ''}`);
}

async function runTests() {
  console.log('================================================================');
  console.log('🚀 STARTING COMPREHENSIVE SHOPEASE FULL-STACK E2E TEST SUITE');
  console.log('================================================================\n');

  // 1. Health Check
  try {
    const res = await axios.get(`${BASE_URL}/health`);
    record('1. Backend Health Check', res.data.success && res.data.data.status === 'UP', `Java: ${res.data.data.java}`);
  } catch (err) {
    record('1. Backend Health Check', false, err.message);
  }

  // 2. Public Product Catalog (Fetch In-Stock Product)
  try {
    const res = await axios.get(`${BASE_URL}/products?in_stock=true&limit=50`);
    const inStockList = res.data.data.products?.filter((p) => p.stock > 5) || [];
    const targetProduct = inStockList[0] || res.data.data.products[0];
    testProductId = targetProduct?.id;
    record('2. Product Catalog Query', res.data.success && testProductId != null, `Selected Product ID: ${testProductId} ("${targetProduct?.name}", Stock: ${targetProduct?.stock})`);
  } catch (err) {
    record('2. Product Catalog Query', false, '', err);
  }

  // 3. Product Details & Variants
  try {
    const res = await axios.get(`${BASE_URL}/products/${testProductId}`);
    record('3. Product Details by ID', res.data.success && res.data.data.name, res.data.data.name);
  } catch (err) {
    record('3. Product Details by ID', false, err.message);
  }

  // 4. Categories Listing
  try {
    const res = await axios.get(`${BASE_URL}/categories`);
    const count = res.data.data?.length || 0;
    record('4. Categories Listing', res.data.success && count > 0, `Total categories: ${count}`);
  } catch (err) {
    record('4. Categories Listing', false, err.message);
  }

  // 5. Guest Cart Addition (with x-session-id)
  try {
    const res = await axios.post(`${BASE_URL}/cart/add`, {
      product_id: testProductId,
      quantity: 2,
      session_id: guestSessionId
    }, { headers: { 'x-session-id': guestSessionId } });
    record('5. Guest Database Cart Addition', res.data.success && res.data.data.count >= 2, `Cart count: ${res.data.data.count}, Subtotal: $${res.data.data.subtotal}`);
  } catch (err) {
    record('5. Guest Database Cart Addition', false, err.message);
  }

  // 6. User Registration
  const testEmail = `e2e_user_${Date.now()}@example.com`;
  try {
    const res = await axios.post(`${BASE_URL}/auth/register`, {
      name: 'E2E Automated Tester',
      email: testEmail,
      password: 'TestPassword@123',
      phone: '+1-555-0199'
    });
    customerToken = res.data.data.token;
    customerId = res.data.data.id;
    record('6. User Registration & JWT Issuance', res.data.success && customerToken, `User ID: ${customerId}`);
  } catch (err) {
    record('6. User Registration & JWT Issuance', false, err.message);
  }

  // 7. Cart Merge upon Authentication
  try {
    const res = await axios.post(`${BASE_URL}/cart/merge`, {
      session_id: guestSessionId
    }, { headers: { Authorization: `Bearer ${customerToken}`, 'x-session-id': guestSessionId } });
    record('7. Guest Cart Merging to Authenticated User', res.data.success && res.data.data.items?.length > 0, `Merged items: ${res.data.data.items.length}`);
  } catch (err) {
    record('7. Guest Cart Merging to Authenticated User', false, err.message);
  }

  // 8. Add Shipping Address
  let addressId = null;
  try {
    const res = await axios.post(`${BASE_URL}/auth/addresses`, {
      full_name: 'E2E Automated Tester',
      phone: '+1-555-0199',
      street: '456 Automation Way',
      city: 'San Francisco',
      state: 'CA',
      pincode: '94105',
      is_default: true
    }, { headers: { Authorization: `Bearer ${customerToken}` } });
    addressId = res.data.data.id;
    record('8. Save Customer Shipping Address', res.data.success && addressId, `Address ID: ${addressId}`);
  } catch (err) {
    record('8. Save Customer Shipping Address', false, err.message);
  }

  // 9. Coupon Code Validation
  try {
    const res = await axios.post(`${BASE_URL}/payment/validate-coupon`, {
      code: 'SAVE10',
      order_amount: 150.0
    });
    record('9. Coupon Validation (SAVE10)', res.data.success && res.data.data.discount_amount === 15.0, `Discount: $${res.data.data.discount_amount}`);
  } catch (err) {
    record('9. Coupon Validation (SAVE10)', false, err.message);
  }

  // 10. Order Placement (Stock Decrement & Loyalty Points Accrual)
  try {
    const res = await axios.post(`${BASE_URL}/orders`, {
      items: [{ product_id: testProductId, quantity: 1 }],
      shipping_address: {
        fullName: 'E2E Tester',
        street: '456 Automation Way',
        city: 'San Francisco',
        state: 'CA',
        pincode: '94105'
      },
      payment_method: 'UPI',
      coupon_code: 'SAVE10',
      payment_id: `pay_e2e_qr_${Date.now()}`
    }, { headers: { Authorization: `Bearer ${customerToken}` } });
    createdOrderId = res.data.data.id;
    createdOrderNumber = res.data.data.order_number;
    record('10. Order Placement with Coupon & Loyalty Accrual', res.data.success && createdOrderId, `Order #${createdOrderNumber}, Earned Points: ${res.data.earned_points}`);
  } catch (err) {
    record('10. Order Placement with Coupon & Loyalty Accrual', false, err.message);
  }

  // 11. Fetch Customer Order History
  try {
    const res = await axios.get(`${BASE_URL}/orders`, {
      headers: { Authorization: `Bearer ${customerToken}` }
    });
    const found = res.data.data.some((o) => o.id === createdOrderId);
    record('11. Customer Order History Retrieval', res.data.success && found, `Found order in history`);
  } catch (err) {
    record('11. Customer Order History Retrieval', false, err.message);
  }

  // 12. OpenPDF Streaming Tax Invoice Download
  try {
    const res = await axios.get(`${BASE_URL}/orders/${createdOrderId}/invoice`, {
      headers: { Authorization: `Bearer ${customerToken}` },
      responseType: 'arraybuffer'
    });
    const isPdf = res.headers['content-type'] === 'application/pdf' && res.data.byteLength > 1000;
    record('12. Vector OpenPDF Invoice Generation & Download', isPdf, `PDF Size: ${(res.data.byteLength / 1024).toFixed(2)} KB`);
  } catch (err) {
    record('12. Vector OpenPDF Invoice Generation & Download', false, err.message);
  }

  // 13. Dynamic Verified Buyer Review Submission
  try {
    const res = await axios.post(`${BASE_URL}/reviews/product/${testProductId}`, {
      rating: 5,
      comment: 'Exceptional build quality and fast dispatch! Verified buyer test.'
    }, { headers: { Authorization: `Bearer ${customerToken}` } });
    record('13. Verified Buyer Review Submission', res.data.success && res.data.data.is_verified_buyer === true, `is_verified_buyer: ${res.data.data.is_verified_buyer}`);
  } catch (err) {
    record('13. Verified Buyer Review Submission', false, err.message);
  }

  // 14. Admin Authentication
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'admin@shopease.com',
      password: 'Admin@123'
    });
    adminToken = res.data.data.token;
    record('14. Admin Authentication', res.data.success && res.data.data.role === 'admin', `Role: ${res.data.data.role}`);
  } catch (err) {
    record('14. Admin Authentication', false, err.message);
  }

  // 15. Admin Dashboard Metrics & Analytics
  try {
    const res = await axios.get(`${BASE_URL}/admin/dashboard`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    const metrics = res.data.data.metrics;
    record('15. Admin Dashboard Analytics & KPIs', res.data.success && metrics.totalOrders > 0, `Total Revenue: $${metrics.totalRevenue}, Orders: ${metrics.totalOrders}`);
  } catch (err) {
    record('15. Admin Dashboard Analytics & KPIs', false, err.message);
  }

  // 16. Admin Order Status Update
  try {
    const res = await axios.put(`${BASE_URL}/orders/${createdOrderId}/status`, {
      status: 'Shipped',
      payment_status: 'Paid'
    }, { headers: { Authorization: `Bearer ${adminToken}` } });
    record('16. Admin Order Status Transition', res.data.success && res.data.data.order_status === 'Shipped', `Status updated to: ${res.data.data.order_status}`);
  } catch (err) {
    record('16. Admin Order Status Transition', false, err.message);
  }

  // 17. Security Access Control: Reject Standard Customer from Admin Endpoint
  try {
    await axios.put(`${BASE_URL}/orders/${createdOrderId}/status`, {
      status: 'Delivered'
    }, { headers: { Authorization: `Bearer ${customerToken}` } });
    record('17. Security RBAC Guard (Block Non-Admin)', false, 'Customer unexpectedly allowed to update admin order status');
  } catch (err) {
    const isForbidden = err.response && (err.response.status === 403 || err.response.status === 401);
    record('17. Security RBAC Guard (Block Non-Admin)', isForbidden, `Correctly rejected with HTTP ${err.response?.status}`);
  }

  // 18. Security: Forgot Password Does NOT Leak Token
  try {
    const res = await axios.post(`${BASE_URL}/auth/forgot-password`, {
      email: 'admin@shopease.com'
    });
    const leaked = res.data.data && (res.data.data.reset_token || res.data.data.reset_url);
    record('18. Security Guard: Forgot Password Zero Token Leak', !leaked, `Response: ${res.data.message}`);
  } catch (err) {
    record('18. Security Guard: Forgot Password Zero Token Leak', false, err.message);
  }

  // 19. Payment Order Initialization (No 403 Forbidden)
  try {
    const res = await axios.post(`${BASE_URL}/payment/create-order`, {
      amount: 499.0,
      currency: 'INR'
    });
    record('19. UPI / Gateway Order Initialization', res.data.success && res.data.data.order_id, `Order Gateway ID: ${res.data.data?.order_id}`);
  } catch (err) {
    record('19. UPI / Gateway Order Initialization', false, err.message);
  }

  // 20. Payment Verification (No 403 Forbidden)
  try {
    const res = await axios.post(`${BASE_URL}/payment/verify`, {
      razorpay_payment_id: 'pay_upi_test_' + Date.now()
    });
    record('20. UPI / Payment Signature Verification', res.data.success && res.data.data.verified === true, `Payment ID: ${res.data.data?.payment_id}`);
  } catch (err) {
    record('20. UPI / Payment Signature Verification', false, err.message);
  }

  console.log('\n================================================================');
  console.log(`🏁 TEST RESULTS: ${results.filter(r => r.passed).length} / ${results.length} PASSED`);
  console.log('================================================================');
}

runTests();
