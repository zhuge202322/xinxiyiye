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

    // 🛠️ 黄金绑定 SiteGround 发信参数 (直接硬连，秒杀一切 Windows 环境变量多进程缓存读取问题)
    const host = 'gcam1204.siteground.biz';
    const port = 465;
    const user = 'info@myklens.com';
    const pass = 'Em88220790';
    const adminEmail = 'info@myklens.com';

    // 1. 创建 nodemailer 传输承载器
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: true, // SSL 安全加密连接
      auth: {
        user,
        pass,
      },
      // 极速超时检测，防服务器防火墙默默拦截时前台长时间卡死
      connectionTimeout: 5000, 
      greetingTimeout: 5000,
      socketTimeout: 5000,
    });

    // 2. 物理校验连接有效性
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('❌ [SMTP Auth Failed] Unable to connect to SiteGround SMTP on Server:', verifyError.message);
      return NextResponse.json({ 
        error: `Cloud Server Mail Outbound Blocked or Failed: ${verifyError.message || 'Please open Outgoing Port 465 on your cloud firewall.'}` 
      }, { status: 500 });
    }

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
