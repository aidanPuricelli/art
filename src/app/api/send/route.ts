import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // try {
  //   const { name, email, message } = await req.json();

  //   await resend.emails.send({
  //     from: "Website Contact <onboarding@resend.dev>",
  //     to: "aidanpuricelli@gmail.com", // hide this in .env
  //     subject: `Portfolio Inquiry from ${name}`,
  //     reply_to: email,
  //     text: `You recieved the following message from ${name}:\n\n${message}\n\n${email}`,
  //   });

  //   return NextResponse.json({ success: true });
  // } catch (error) {
  //   console.error(error);
  //   return NextResponse.json({ success: false }, { status: 500 });
  // }
}
