import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  nin: { type: String },
  dateOfBirth: { type: Date },
  state: { type: String, default: 'Lagos' },
  lga: { type: String },
  residentialAddress: { type: String },
  vin: { type: String },
  profilePicture: { type: String },
  uploadedDocuments: [{ type: String }], // Array of document URLs/paths (including NIN as document)
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },
  onboarded: { 
    type: Boolean, 
    default: false 
  },  
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
