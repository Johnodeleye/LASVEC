import connectMongo from '../../lib/mongodb';
import User from '../../models/User';
import bcrypt  from 'bcryptjs';

export default async function handler(req, res) {
    try {
      await connectMongo();
  
      const hashedPassword = await bcrypt.hash('hashedpassword123', 10);
  
      const user = await User.create({
        fullName: 'John Ayomide',
        email: 'john@example.com',
        password: hashedPassword,
      });
  
      res.status(200).json({ success: true, user });
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).json({
          success: false,
          message: 'Email already exists. Please use a different email.',
        });
      }
      console.error(err);
      res.status(500).json({ success: false, message: err.message });
    }
  }
  
