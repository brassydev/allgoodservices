import bcrypt from 'bcryptjs';
import dbConnect from "@/lib/dbConnect";
import Admin from '@/models/Admin';

// Export the POST method
export async function POST(req) {
  try {
    await dbConnect();

    const { username, email, password,isActive } = await req.json(); // Parse the request body

    // Validate input fields
    if (!username || !email || !password) {
      return new Response(JSON.stringify({ message: 'Please provide all fields' }), { status: 400 });
    }

    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return new Response(JSON.stringify({ message: 'Admin already exists' }), { status: 400 });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({
      username,
      email,
      password: hashedPassword,
      isActive: false
    });
    console.log(newAdmin); // This should show the new admin object with all fields
    await newAdmin.save();

    return new Response(JSON.stringify({ message: 'Admin registered successfully' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
