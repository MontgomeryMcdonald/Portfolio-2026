import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/lib/models/Project";

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const filter = status && status !== "all" ? { status } : {};
    const tasks = await Project.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: tasks });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const task = await Project.create(body);
    return NextResponse.json({ success: true, data: task }, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
