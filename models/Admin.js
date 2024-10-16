import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: false } // Add the isActive field

});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
