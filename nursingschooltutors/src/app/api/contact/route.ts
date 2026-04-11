import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, university, service, budget_selected, budget_custom, message } = body

    const emailBody = `
NEW CONTACT FORM SUBMISSION — NursingSchoolTutors.com
=====================================================
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
University: ${university || 'Not provided'}
Service: ${service}
Budget Selected: ${budget_selected || 'None selected'}
Budget Custom: $${budget_custom || 'Not entered'}
Message:
${message}
=====================================================
Reply via WhatsApp: https://wa.me/17654709090
    `.trim()

    // Use Netlify Forms fallback OR send via nodemailer
    // For Netlify: add data-netlify="true" to form, or use fetch to Netlify's form endpoint
    // For email: configure SMTP in env vars
    const SMTP_TO = process.env.CONTACT_EMAIL || 'instanthelp24hr@gmail.com'

    // Simple nodemailer approach (requires SMTP env vars)
    if (process.env.SMTP_HOST) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      await transporter.sendMail({
        from: `"NursingSchoolTutors Form" <${process.env.SMTP_USER}>`,
        to: SMTP_TO,
        subject: `New Quote Request: ${service} — ${name}`,
        text: emailBody,
      })
    }

    // Always log for debugging
    console.log('Contact form submission:', emailBody)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
