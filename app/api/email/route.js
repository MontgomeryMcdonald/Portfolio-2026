import sendEmail from '@/lib/resend'
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = {email: request.email, subject: request.subject, body: request.body, name: request.name}
    sendEmail(request.email, request.subject, request.body, request.name)
    return NextResponse.json({ success: true, data: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
