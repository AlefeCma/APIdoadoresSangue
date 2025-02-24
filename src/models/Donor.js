import mongoose from 'mongoose';
import preSave from '../middleware/PreSave.js'; // Importe a função de middleware

const donorSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true,
    not: null
  },
  CPF: {
    type: String,
    required: true,
    not: null
  },
  birthDate: {
    type: Date,
    required: true,
    not: null
  },
  sex: {
    type: String,
    required: true,
    not: null
  },
  address: {
    type: String,
    required: true,
    not: null
  },
  telephone: {
    type: String,
    required: true,
    not: null
  },
  donationHistory: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    donationDate: {
      type: Date,
      default: Date.now
    },
    bloodTest: [{
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
      },
      bloodType: {
        type: String
      },
      exams: {
        type: [String]
      },
      examsResult: {
        type: String
      }
    }],
    expiryDate: {
      type: Date
    },
    nextDonationDate: {
      type: Date,
    },
  }]
}, { versionKey: false });

donorSchema.pre('save', preSave); // Use a função de middleware

export default mongoose.model('Donor', donorSchema);