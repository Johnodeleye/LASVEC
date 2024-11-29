
import connectMongo from '@/lib/mongodb';
import User from '@/models/User';
import { getSession } from 'next-auth/react'; // Assuming you're using NextAuth.js for authentication

// GET /api/user/status
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Get the current session (logged-in user)
    const session = await getSession({ req });
    if (!session || !session.user) {
      return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    await connectMongo();

    // Find the user in the database using their email (you can use other identifiers)
    const user = await User.findOne({ email: session.user.email }).select('onboarded');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Return the onboarded status
    res.status(200).json({
      success: true,
      onboarded: user.onboarded,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
