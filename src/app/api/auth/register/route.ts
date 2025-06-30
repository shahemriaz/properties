import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import User from '../../../lib/user.model';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();
    if (!email || !password || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    await dbConnect();
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashed,
      role,
      isVerified: false,
      isApproved: false,
    });
    // TODO: Trigger email verification here
    return NextResponse.json({ message: 'Registration successful. Please verify your email.' }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
} 