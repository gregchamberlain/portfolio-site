import { Project } from '../models';

const resolveFunctions = {
  Query: {
    projects() {
      return Project.find();
    }
  },
  Mutation: {
    createProject(_, { project }) {
      return Project.create(project);
    }
  }
};

export default resolveFunctions;
