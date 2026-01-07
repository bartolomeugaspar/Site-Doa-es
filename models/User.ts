import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor forneça um nome'],
    maxlength: [100, 'Nome não pode ter mais de 100 caracteres'],
  },
  email: {
    type: String,
    required: [true, 'Por favor forneça um email'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Por favor forneça uma senha'],
    minlength: [6, 'Senha deve ter no mínimo 6 caracteres'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  totalDonated: {
    type: Number,
    default: 0,
  },
  donationsCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  notifications: {
    donationUpdates: { type: Boolean, default: true },
    newsletter: { type: Boolean, default: true },
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
