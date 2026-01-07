import mongoose from 'mongoose'

const InstitutionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome da instituição é obrigatório'],
    maxlength: [200, 'Nome não pode ter mais de 200 caracteres'],
  },
  category: {
    type: String,
    required: true,
    enum: ['Orfanatos', 'Educação', 'Saúde', 'Assistência Social', 'ONGs'],
  },
  description: {
    type: String,
    required: [true, 'Descrição é obrigatória'],
    maxlength: [1000, 'Descrição muito longa'],
  },
  location: {
    city: String,
    state: String,
    country: { type: String, default: 'Angola' },
  },
  contact: {
    email: String,
    phone: String,
    website: String,
  },
  images: [String],
  videos: [String],
  beneficiaries: {
    type: Number,
    default: 0,
  },
  financialGoal: {
    type: Number,
    default: 0,
  },
  totalRaised: {
    type: Number,
    default: 0,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Institution || mongoose.model('Institution', InstitutionSchema)
