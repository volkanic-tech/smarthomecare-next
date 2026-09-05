import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "info@smartcareservices.com.au";
    const formattedSubject = `[Smart Home Care Enquiry] ${subject || "General Enquiry"} - ${name}`;

    const textContent = `
New Contact Form Submission:

Sender Name: ${name}
Sender Email: ${email}
Phone Number: ${phone || "Not provided"}
Topic: ${subject || "General Enquiry"}

Message:
${message}

---
Sent from Smart Home Care Services Website (Contact Page)
Date: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Hobart" })}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0a9fe1, #f370ae); padding: 24px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 24px;">New Website Enquiry</h2>
          <p style="margin: 4px 0 0 0; opacity: 0.9; font-size: 14px;">Smart Home Care Services Pty Ltd</p>
        </div>
        
        <div style="padding: 24px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #0a9fe1;">Name:</td>
              <td style="padding: 8px 0; color: #1f2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0a9fe1;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0a9fe1; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0a9fe1;">Phone:</td>
              <td style="padding: 8px 0; color: #1f2937;">${phone ? `<a href="tel:${phone}" style="color: #1f2937; text-decoration: none;">${phone}</a>` : "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0a9fe1;">Topic:</td>
              <td style="padding: 8px 0; color: #1f2937;"><span style="background-color: #f3f4f6; padding: 4px 8px; rounded: 4px; font-weight: 500;">${subject || "General Enquiry"}</span></td>
            </tr>
          </table>

          <div style="margin-top: 16px; padding: 16px; background-color: #f9fafb; border-left: 4px solid #0a9fe1; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #374151;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #4b5563;">${message}</p>
          </div>
        </div>

        <div style="background-color: #f3f4f6; padding: 12px 24px; font-size: 12px; color: #6b7280; text-align: center; border-top: 1px solid #e5e7eb;">
          Received on ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Hobart" })} (Tasmania Time)
        </div>
      </div>
    `;

    console.log(`[Contact Form] Dispatching enquiry to: ${recipientEmail}`);

    let emailSent = false;

    // 1. Send via SMTP (Nodemailer) if configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"${name} (via Website)" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: formattedSubject,
          text: textContent,
          html: htmlContent,
        });

        emailSent = true;
        console.log(`[Contact Form] Email sent via SMTP to ${recipientEmail}`);
      } catch (smtpErr) {
        console.error("[Contact Form] SMTP Error:", smtpErr);
      }
    }

    // 2. Fallback or primary: Send via Resend API if configured
    if (!emailSent && process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || "Smart Home Care <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: formattedSubject,
            text: textContent,
            html: htmlContent,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
          console.log(`[Contact Form] Email sent via Resend to ${recipientEmail}`);
        } else {
          const resendData = await resendRes.json();
          console.error("[Contact Form] Resend Error:", resendData);
        }
      } catch (resendErr) {
        console.error("[Contact Form] Resend API Exception:", resendErr);
      }
    }

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(textContent)}`;

    return NextResponse.json({
      success: true,
      emailSent,
      recipient: recipientEmail,
      message: "Your message has been sent successfully to info@smartcareservices.com.au.",
      mailtoUrl,
    });
  } catch (error) {
    console.error("[Contact Form] Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or reach us at info@smartcareservices.com.au." },
      { status: 500 }
    );
  }
}
