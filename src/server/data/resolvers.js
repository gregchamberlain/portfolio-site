import { Project, Job } from '../models';

const resolveFunctions = {
  Query: {
    projects() {
      return Project.find();
    },
    jobs() {
      return Job.find();
    }
  },
  Mutation: {
    createProject(_, { project }) {
      return Project.create(project);
    },
    updateProject(_, { project }) {
      return Project.findByIdAndUpdate(project.id, project, { new: true });
    },
    createJob(_, { job }) {
      return Job.create(job);
    },
    updateJob(_, { job }) {
      return Job.findByIdAndUpdate(job.id, job, {new: true});
    }
  }
};

export default resolveFunctions;
