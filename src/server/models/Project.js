import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  githubUrl: String,
  liveUrl: String,
  npmName: String,
  skillsUsed: [String],
  image: String
}, {
  timestamps: true
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
