import connectMongo from '../../lib/mongodb';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Log the incoming request body
  console.log("Incoming Data:", req.body);

  try {
    await connectMongo();

    const { fullName, email, password } = req.body;

    // Validate required fields
    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, message: 'Full name, email, and password are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      status: 'pending', // Set the status to pending by default
    });

    res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });
  } catch (err) {
    // Log the error details
    console.error("Error:", err);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
  }
}
