import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { date, time, email, phone } = await req.json();

    if (!date || !time || !email || !phone) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Better Life <no-reply@yourdomain.com>",
      to: process.env.COMPANY_EMAIL as string,
      subject: "New Visit Scheduled",
      html: `
        <h2>New Visit Scheduled</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    // Optional: send confirmation to user
    await resend.emails.send({
      from: "Better Life <no-reply@yourdomain.com>",
      to: email,
      subject: "Your Visit is Confirmed",
      html: `
        <h2>Thank you for scheduling a visit!</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>We’ll be in touch soon. 😊</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to schedule" }, { status: 500 });
  }
}
