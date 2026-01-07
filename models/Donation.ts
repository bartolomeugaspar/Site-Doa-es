import mongoose from 'mongoose'

const DonationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  institutionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Institution',
    required: true,
  },
  amount: {
    type: Number,
    required: [true, 'Valor da doação é obrigatório'],
    min: [1, 'Valor mínimo é 1'],
  },
  frequency: {
    type: String,
    enum: ['once', 'monthly', 'quarterly', 'yearly'],
    default: 'once',
  },
  paymentMethod: {
    type: String,
    enum: ['multicaixa', 'paypay', 'credit_card', 'bank_transfer'],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  transactionId: {
    type: String,
    unique: true,
    sparse: true,
  },
  certificate: {
    issued: { type: Boolean, default: false },
    url: String,
  },
  anonymous: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    maxlength: [500, 'Mensagem muito longa'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Donation || mongoose.model('Donation', DonationSchema)
