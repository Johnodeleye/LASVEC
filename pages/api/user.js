import connectMongo from '../../lib/mongodb';
import User from '../../models/User';
import { verifyToken } from '../../lib/authMiddleware';

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectMongo();

    const user = await User.findById(req.user.id).select("-password"); // Exclude the password from the response
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export default verifyToken(handler); // Wrap the handler with the token verification middleware
