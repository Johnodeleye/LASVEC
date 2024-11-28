import User from "@/models/User";
import connectMongo from '@/lib/mongodb'
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  await connectMongo();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already registered, please try another email", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    status: "pending", // Default status
  });

  try {
    await newUser.save();
    return new NextResponse("User registered successfully", { status: 200 });
} catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};


