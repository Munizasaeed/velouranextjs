
import { NextResponse } from "next/server";
import { db } from "../../../../firebase-admin";

export async function POST(request) {
  try {
    const data = await request.json();

    const { name, email, subject, message } = data;

    // Validate required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email." },
        { status: 400 }
      );
    }

    // Save message in Firestore
    await db.collection("contactMessages").add({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to send your message." },
      { status: 500 }
    );
  }
}
