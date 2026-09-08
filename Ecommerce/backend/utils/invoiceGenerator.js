import PDFDocument from 'pdfkit';

export const createInvoicePDF = (order, dataCallback, endCallback) => {
  const doc = new PDFDocument({ margin: 50, size: 'A4' });

  doc.on('data', dataCallback);
  doc.on('end', () => {
    if (endCallback) endCallback();
  });
  doc.on('error', (err) => {
    console.error('PDF generation stream error:', err);
    if (endCallback) endCallback(err);
  });

  // Header Logo & Store Info
  doc
    .fillColor('#4338CA')
    .font('Helvetica-Bold')
    .fontSize(24)
    .text('ShopEase', 50, 45)
    .font('Helvetica')
    .fillColor('#6B7280')
    .fontSize(10)
    .text('Premium E-Commerce Platform', 50, 75)
    .text('support@shopease.com | +91 (800) 123-4567', 50, 90)
    .text('GSTIN: 27AABCS1429B1Z8 | www.shopease.com', 50, 105);

  const orderNum = order.order_number || order.id || 'N/A';
  const orderDate = order.createdAt
    ? new Date(order.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
    : new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  const paymentStatus = (order.payment_status || 'PAID').toUpperCase();

  doc
    .fillColor('#111827')
    .font('Helvetica-Bold')
    .fontSize(18)
    .text('TAX INVOICE', 380, 45, { align: 'right' })
    .font('Helvetica')
    .fontSize(10)
    .fillColor('#4B5563')
    .text(`Invoice No: INV-${orderNum}`, 380, 75, { align: 'right' })
    .text(`Date: ${orderDate}`, 380, 90, { align: 'right' })
    .text(`Payment: ${paymentStatus}`, 380, 105, { align: 'right' });

  doc.moveTo(50, 130).lineTo(545, 130).strokeColor('#E5E7EB').stroke();

  // Billed To & Shipping details
  let address = {};
  if (typeof order.shipping_address_snapshot === 'string') {
    try {
      address = JSON.parse(order.shipping_address_snapshot || '{}');
    } catch (e) {
      address = {};
    }
  } else if (order.shipping_address_snapshot && typeof order.shipping_address_snapshot === 'object') {
    address = order.shipping_address_snapshot;
  }

  const customerName = address.full_name || order.user?.name || 'Valued Customer';
  const customerStreet = address.street || 'Standard Delivery Address';
  const customerCity = address.city || address.state ? `${address.city || ''}, ${address.state || ''} ${address.pincode ? `- ${address.pincode}` : ''}` : 'India';
  const customerPhone = address.phone || order.user?.phone || 'N/A';
  const customerEmail = order.user?.email || 'N/A';

  doc
    .fillColor('#111827')
    .font('Helvetica-Bold')
    .fontSize(11)
    .text('BILLED & SHIPPED TO:', 50, 145)
    .font('Helvetica')
    .fontSize(10)
    .fillColor('#374151')
    .text(customerName, 50, 163)
    .text(customerStreet, 50, 178)
    .text(customerCity, 50, 193)
    .text(`Phone: ${customerPhone}`, 50, 208)
    .text(`Email: ${customerEmail}`, 50, 223);

  doc
    .fillColor('#111827')
    .font('Helvetica-Bold')
    .fontSize(11)
    .text('ORDER & PAYMENT DETAILS:', 340, 145)
    .font('Helvetica')
    .fontSize(10)
    .fillColor('#374151')
    .text(`Payment Method: ${order.payment_method || 'Online / Card'}`, 340, 163)
    .text(`Order Status: ${order.order_status || 'Confirmed'}`, 340, 178)
    .text(`Transaction Ref: ${order.razorpay_payment_id || 'PAY-' + orderNum}`, 340, 193);

  doc.moveTo(50, 245).lineTo(545, 245).strokeColor('#E5E7EB').stroke();

  // Items Table Header
  let y = 258;
  doc
    .rect(50, y - 4, 495, 22)
    .fill('#F3F4F6');

  doc
    .fillColor('#111827')
    .font('Helvetica-Bold')
    .fontSize(9)
    .text('#', 60, y)
    .text('Item Description', 85, y)
    .text('Qty', 345, y, { align: 'center' })
    .text('Unit Price', 400, y, { align: 'right' })
    .text('Total', 485, y, { align: 'right' });

  y += 26;

  // Table rows
  const items = order.items || [];
  if (items.length > 0) {
    items.forEach((item, index) => {
      const itemPrice = Number(item.price || 0);
      const itemQty = Number(item.quantity || 1);
      const itemTotal = (itemPrice * itemQty).toFixed(2);
      const itemName = item.product_name_snapshot || item.product?.name || 'Product Item';

      doc
        .font('Helvetica')
        .fillColor('#374151')
        .fontSize(9)
        .text((index + 1).toString(), 60, y)
        .text(itemName, 85, y, { width: 250 })
        .text(itemQty.toString(), 345, y, { align: 'center' })
        .text(`INR ${itemPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 400, y, { align: 'right' })
        .text(`INR ${Number(itemTotal).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 485, y, { align: 'right' });

      y += 24;
      doc.moveTo(50, y - 6).lineTo(545, y - 6).strokeColor('#F3F4F6').stroke();
    });
  } else {
    doc
      .font('Helvetica')
      .fillColor('#6B7280')
      .fontSize(9)
      .text('General Order Package Items', 85, y);
    y += 24;
  }

  y += 8;
  doc.moveTo(50, y).lineTo(545, y).strokeColor('#E5E7EB').stroke();
  y += 14;

  // Totals Section
  const subtotal = Number(order.total_amount || order.final_amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 });
  const discount = Number(order.discount_amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 });
  const shipping = Number(order.shipping_charge || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 });
  const grandTotal = Number(order.final_amount || order.total_amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 });

  doc
    .font('Helvetica')
    .fillColor('#4B5563')
    .fontSize(10)
    .text('Subtotal:', 340, y)
    .text(`INR ${subtotal}`, 485, y, { align: 'right' });

  y += 18;
  if (Number(order.discount_amount) > 0) {
    doc
      .text(`Coupon Discount (${order.coupon_code || 'SPECIAL'}):`, 340, y)
      .fillColor('#059669')
      .text(`-INR ${discount}`, 485, y, { align: 'right' });
    y += 18;
  }

  doc
    .fillColor('#4B5563')
    .text('Shipping & Handling:', 340, y)
    .text(Number(order.shipping_charge) === 0 ? 'FREE' : `INR ${shipping}`, 485, y, { align: 'right' });

  y += 22;
  doc.rect(330, y - 5, 215, 28).fill('#EEF2FF');

  doc
    .fillColor('#4338CA')
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Grand Total:', 340, y)
    .text(`INR ${grandTotal}`, 485, y, { align: 'right' });

  // Footer notes & Computer generated stamp
  doc
    .font('Helvetica')
    .fillColor('#9CA3AF')
    .fontSize(8)
    .text('Thank you for shopping with ShopEase! For support or returns, email support@shopease.com.', 50, 745, { align: 'center', width: 495 })
    .text('This is an authenticated computer-generated GST tax invoice and requires no physical signature.', 50, 760, { align: 'center', width: 495 });

  doc.end();
};
