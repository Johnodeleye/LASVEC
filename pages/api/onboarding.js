import connectMongo from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectMongo();

    const { email, phone, dateOfBirth, state, lga, residentialAddress } = req.body;

    // Validate required fields for onboarding
    if (!email || !phone || !dateOfBirth || !state || !lga || !residentialAddress) {
      return res.status(400).json({ success: false, message: 'All fields are required for onboarding' });
    }

    // Find the user by email (which is unique) and update their info
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find user by email
      { 
        phone,
        dateOfBirth,
        state,
        lga,
        residentialAddress,
        status: 'pending',  // Status will remain 'pending' until verified by admin
        onboarded: 'true'
      },
      { new: true } // Return the updated user document
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      message: 'User onboarding updated successfully',
      user: updatedUser,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
