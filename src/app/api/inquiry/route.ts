import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      inquiryType,
      projectDetails,
      productName, // 如果是来自产品详情页，会带上具体的关联产品名称
    } = body;

    // 基本安全校验 (Email 与 Phone 必填)
    if (!email || !phone) {
      return NextResponse.json({ error: 'Email and Phone are required' }, { status: 400 });
    }

    // 读取环境变量配置
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || '465');
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const adminEmail = process.env.ADMIN_EMAIL || user; // 如果未单独配置管理员邮箱，默认由自己接收

    // 友情提示：如果环境变量一个都没配，说明管理员还没进行企业邮箱绑定
    if (!host || !user || !pass) {
      console.warn('⚠️ [Mail Gateway Warning] SMTP configuration is missing in environment variables. Inquiry received but could not send email:', body);
      // 为了不影响前端客户的提交体验（即便没配邮件，也提示成功提交），我们优雅地返回成功并提示进入后台处理
      return NextResponse.json({ 
        success: true, 
        message: 'Inquiry received. (SMTP not configured on server yet)' 
      });
    }

    // 1. 创建 nodemailer 传输承载器
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 端口采用 SSL 安全加密连接
      auth: {
        user,
        pass,
      },
    });

    // 🛠️ 构造极其高端、专业、清晰的外贸客户询盘 HTML 排版邮件
    const sourceTag = productName 
      ? `Product Detail Page (${productName})` 
      : 'Contact Us General Page';

    const mailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f6f9fc; color: #333; margin: 0; padding: 40px 20px; }
            .container { max-w: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #eef2f5; }
            .header { background: linear-gradient(135deg, #0284c7, #0369a1); color: #ffffff; padding: 30px; text-align: center; }
            .header h2 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
            .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.9; }
            .content { padding: 40px; }
            .table-title { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 15px; border-left: 4px solid #0284c7; padding-left: 10px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            th { text-align: left; padding: 12px; background-color: #f8fafc; font-size: 13px; font-weight: 700; color: #64748b; border-bottom: 1px solid #e2e8f0; width: 120px; }
            td { padding: 12px; font-size: 14px; color: #334155; border-bottom: 1px solid #f1f5f9; word-break: break-all; }
            .details-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-line; }
            .footer { background-color: #f8fafc; text-align: center; padding: 20px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
            .footer a { color: #0284c7; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Inquiry Received</h2>
              <p>Origin: ${sourceTag}</p>
            </div>
            
            <div class="content">
              <div class="table-title">Buyer Information</div>
              <table>
                <tr>
                  <th>Full Name</th>
                  <td>${name || 'Anonymous Buyer'}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td><a href="mailto:${email}" style="color: #0284c7; font-weight: 600;">${email}</a></td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td><a href="tel:${phone}" style="color: #0284c7;">${phone}</a></td>
                </tr>
                <tr>
                  <th>Company</th>
                  <td>${company || 'Not Specified'}</td>
                </tr>
                <tr>
                  <th>Inquiry Type</th>
                  <td><span style="background-color: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">${inquiryType || 'General Purchase Inquiry'}</span></td>
                </tr>
                ${productName ? `
                <tr>
                  <th>Target Product</th>
                  <td><strong style="color: #0f172a;">${productName}</strong></td>
                </tr>
                ` : ''}
              </table>

              <div class="table-title">Project & Purchasing Details</div>
              <div class="details-box">
                ${projectDetails || 'No additional project description provided.'}
              </div>
            </div>

            <div class="footer">
              This message was securely routed via your Myklens Web Mail Gateway.<br>
              &copy; 2026 <a href="https://myklens.com">Myklens Industrial</a>. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `;

    // 2. 发送邮件
    const subjectPrefix = productName ? `[Product Spec/Inquiry: ${productName}]` : '[General Website Inquiry]';
    await transporter.sendMail({
      from: `"${name || 'Myklens Website'} Inquiry" <${user}>`,
      to: adminEmail,
      subject: `${subjectPrefix} New Purchase Request from ${name || 'Buyer'}`,
      html: mailHtml,
    });

    return NextResponse.json({ success: true, message: 'Inquiry email sent successfully' });
  } catch (error: any) {
    console.error('❌ [Mail Gateway Error] Failed to process or send inquiry email:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
