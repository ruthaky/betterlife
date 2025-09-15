import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";

const resend = new Resend("re_eZGpMqHT_BAJoE3UEkHTRyDeQvE4bfqQj");

export async function POST(request: Request) {
 
  try {
    // const { name, email, phonenumber, message } = body;
 const body = await request.json();
    const data = await resend.emails.send({
      from: "Website Contact form <onboarding@resend.dev>", // Verified sender email
      to: ["betterlifellc8@gmail.com"], // Replace with your receiving email
      subject: "New Contact Form Submission",
      react: EmailTemplate({
      name: body.name,
        email: body.email,
        phonenumber: body.phonenumber,
        message: body.message,
      }),
    });

    // if (error) {
    //   return NextResponse.json({ error: error.message }, { status: 500 });
    // }

    return NextResponse.json({ status: "success", data });
  } catch (error: any) {
    console.error("❌ Error sending email:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause,
    });

    // Make sure JSON is always returned
    return NextResponse.json(
      { status: "error", error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
