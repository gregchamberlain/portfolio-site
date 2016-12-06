import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  position: { type: String, required: true },
  duration: String,
  location: String,
  highlights: [String]
}, {
  timestamps: true
});

const Job = mongoose.model('Job', JobSchema);

export default Job;
