const nodemailer = require('nodemailer')
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { to, subject, text } = await req.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // use your email service
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS, // your email password
    },
  });

  // Set up email data
  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
  };

  try {
    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export async function defaultHandler(req: NextRequest) {
  return NextResponse.json({ message: `Method ${req.method} Not Allowed` }, { status: 405 });
}
