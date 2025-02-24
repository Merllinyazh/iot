import mongoose from 'mongoose';

const binSchema = new mongoose.Schema({
  binId: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  fillLevel: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 0
  },
  lastCollection: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'maintenance', 'inactive'],
    default: 'active'
  }
}, {
  timestamps: true
});

binSchema.index({ location: '2dsphere' });

export default mongoose.model('Bin', binSchema);