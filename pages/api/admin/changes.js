import connectMongo from '@/lib/mongodb';
import User from '@/models/User';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectMongo();

    const { email, status, reason } = req.body; // Include reason for rejection or request changes

    // Validate inputs
    if (!email || !status || !['approved', 'rejected', 'needs review'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email and status (approved, rejected, or needs review)',
      });
    }

    // Find and update the user
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { status, rejectionReason: reason || '' }, // Optionally, store rejection reason
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      message: `User ${status} successfully`,
      user: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
