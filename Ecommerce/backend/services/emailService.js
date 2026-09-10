import nodemailer from 'nodemailer';

let transporter = null;

const createTransporter = async () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  } else {
    // Zero-config Ethereal / Local Test Mailer Simulator
    const testAccount = await nodemailer.createTestAccount().catch(() => null);
    if (testAccount) {
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
    }
  }
};

createTransporter();

// @desc    Send Order Confirmation Transactional Email with PDF Invoice
export const sendOrderConfirmationEmail = async (order, user, pdfBuffer = null) => {
  const address = typeof order.shipping_address_snapshot === 'string'
    ? JSON.parse(order.shipping_address_snapshot || '{}')
    : (order.shipping_address_snapshot || {});

  const itemsHtml = (order.items || []).map(item => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
        <p style="margin: 0; font-weight: bold; color: #1e293b; font-size: 14px;">${item.product_name_snapshot}</p>
        <p style="margin: 4px 0 0; color: #64748b; font-size: 12px;">Qty: ${item.quantity}</p>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; text-align: right; font-weight: bold; color: #1e293b; font-size: 14px;">
        &#8377;${Number(item.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
      </td>
    </tr>
  `).join('');

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .header { background: linear-gradient(135deg, #4f46e5, #4338ca); color: #ffffff; padding: 32px 24px; text-align: center; }
        .content { padding: 32px 24px; }
        .order-badge { background: #eef2ff; color: #4338ca; padding: 6px 16px; border-radius: 9999px; font-size: 12px; font-weight: bold; display: inline-block; }
        .total-box { background: #f8fafc; border-radius: 12px; padding: 16px; margin-top: 24px; border: 1px solid #e2e8f0; }
        .btn { background: #4f46e5; color: #ffffff !important; padding: 12px 28px; border-radius: 12px; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 26px; font-weight: 800;">ShopEase India</h1>
          <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">Order Confirmed & In Preparation</p>
        </div>
        <div class="content">
          <div style="text-align: center; margin-bottom: 24px;">
            <span class="order-badge">Order #${order.order_number}</span>
            <p style="color: #475569; font-size: 14px; margin-top: 12px;">
              Hi <strong>${user?.name || address.full_name || 'Valued Customer'}</strong>, thank you for choosing ShopEase! We've received your order and our logistics team is preparing your package.
            </p>
          </div>

          <h3 style="font-size: 16px; color: #0f172a; margin-bottom: 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Order Summary</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${itemsHtml}
          </table>

          <div class="total-box">
            <table style="width: 100%; font-size: 13px; color: #475569;">
              <tr>
                <td>Subtotal</td>
                <td style="text-align: right; font-weight: bold; color: #0f172a;">&#8377;${Number(order.total_amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
              </tr>
              ${Number(order.discount_amount) > 0 ? `
              <tr>
                <td style="color: #10b981;">Coupon Discount</td>
                <td style="text-align: right; font-weight: bold; color: #10b981;">-&#8377;${Number(order.discount_amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
              </tr>` : ''}
              <tr>
                <td>Shipping</td>
                <td style="text-align: right; font-weight: bold; color: #0f172a;">${Number(order.shipping_charge) === 0 ? 'FREE' : `&#8377;${Number(order.shipping_charge).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`}</td>
              </tr>
              <tr style="border-top: 1px solid #cbd5e1; font-size: 15px; font-weight: bold; color: #4338ca;">
                <td style="padding-top: 8px;">Total Paid</td>
                <td style="padding-top: 8px; text-align: right;">&#8377;${Number(order.final_amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
              </tr>
            </table>
          </div>

          <div style="text-align: center; margin-top: 28px;">
            <p style="color: #64748b; font-size: 12px; margin-bottom: 4px;">Delivering to: ${address.street}, ${address.city}</p>
            <p style="color: #94a3b8; font-size: 11px; margin: 0;">A tax invoice PDF has been attached to this confirmation email.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    if (transporter && user?.email) {
      const mailOptions = {
        from: '"ShopEase Support" <orders@shopease.com>',
        to: user.email,
        subject: `🎉 Order Confirmation #${order.order_number} - ShopEase`,
        html: htmlContent,
        attachments: pdfBuffer ? [
          {
            filename: `Invoice-${order.order_number}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf'
          }
        ] : []
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`✉️ Order confirmation email dispatched to ${user.email} (MessageID: ${info.messageId})`);
      if (nodemailer.getTestMessageUrl(info)) {
        console.log(`🔗 Preview Email URL: ${nodemailer.getTestMessageUrl(info)}`);
      }
    } else {
      console.log(`✉️ Order Confirmation for #${order.order_number} queued for ${user?.email || 'customer'}`);
    }
  } catch (err) {
    console.warn('Email dispatch notice:', err.message);
  }
};
