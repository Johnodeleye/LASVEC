import connectMongo from '../../lib/mongodb';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // For creating tokens

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectMongo();

    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Check if the user has completed onboarding
    const isOnboardingCompleted = user.onboardingCompleted;  // assuming this field exists

    if (!user.status === 'approved' && isOnboardingCompleted) {
      return res.status(200).json({
        success: true,
        message: 'Login successful, but your account is not approved. Please wait for admin approval.',
        token: 'fake-jwt-token', // send token for now
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          isOnboardingCompleted: isOnboardingCompleted, // Indicating onboarding needs to be finished
        },
      });
    }

    // If the account is approved, proceed with the normal flow
    if (user.status === 'approved') {
      // Create a JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email }, // Payload
        process.env.JWT_SECRET, // Secret key
        { expiresIn: '1h' } // Token expiry
      );

      // Respond with the token and user info
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    }

    // If onboarding not completed, ask user to complete it
    res.status(200).json({
      success: true,
      message: 'Please complete onboarding to continue',
      token: 'fake-jwt-token', // Token for the session
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        isOnboardingCompleted: isOnboardingCompleted,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
