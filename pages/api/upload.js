// import connectMongo from '../../lib/mongodb';
// import User from '../../models/User';
// import { verify } from 'jsonwebtoken';

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '5mb', // Limit file size to 5MB
//     },
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ success: false, message: 'Method not allowed' });
//   }

//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ success: false, message: 'Unauthorized' });
//   }

//   try {
//     const decoded = verify(token, process.env.JWT_SECRET);
//     const userId = decoded.id;

//     await connectMongo();

//     const file = req.body.file; // Expect the base64-encoded file

//     if (!file) {
//       return res.status(400).json({ success: false, message: 'No file uploaded' });
//     }

//     // Upload to Cloudinary
//     const uploadResponse = await cloudinary.uploader.upload(file, {
//       folder: 'user_documents', // Optional folder
//       resource_type: 'auto',    // Automatically determine file type
//     });

//     // Update user's uploaded documents
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     user.uploadedDocuments.push(uploadResponse.secure_url);
//     await user.save();

//     res.status(200).json({
//       success: true,
//       message: 'Document uploaded successfully',
//       fileUrl: uploadResponse.secure_url,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// }