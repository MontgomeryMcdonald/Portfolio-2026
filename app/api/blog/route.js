import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";

// GET /api/tasks — fetch all tasks (with optional ?status= filter)
export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const filter = status && status !== "all" ? { status } : {};
    const tasks = await Blog.find(filter).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: tasks });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST /api/tasks — create a new task
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const task = await Blog.create(body);
    return NextResponse.json({ success: true, data: task }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
