import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from "@/lib/dbConnect";
import Admin from '@/models/Admin';

export async function POST(req, res) {
  try {
    await dbConnect();

    const { email, password } = await req.json(); // Parse the request body

    // Check if the admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 400 });
    }

    // Check if the admin account is active
    if (!admin.isActive) {
    return new Response(JSON.stringify({ message: 'Account is not active' }), { status: 403 });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 400 });
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ message: 'Something went wrong' }), { status: 500 });
  }
}
