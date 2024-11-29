import connectMongo from '@/lib/mongodb';
import User from '@/models/User';

// GET /api/admin/users
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectMongo();

    // Fetch all users and their statuses
    const users = await User.find({}).select('fullName email status onboarded'); // You can adjust the fields here
    if (users.length === 0) {
      return res.status(404).json({ success: false, message: 'No users found' });
    }

    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

//THIS API ALLOWS THE ADMIN TO FETCH ALL THE USERS AND THEIR STATUS FROM THE DATABASE!!! 
