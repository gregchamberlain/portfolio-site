import { Project, Job } from '../models';
import axios from 'axios';

import aws from 'aws-sdk';
const s3 = new aws.S3();

const resolveFunctions = {
  Project: {
    npmDownloads({ npmName }, { period }) {
      if (!npmName) return null;
      const url = `https://api.npmjs.org/downloads/point/${period}/${npmName}`;
      return axios.get(url).then(resp => resp.data.downloads);
    }
  },
  Query: {
    name: () => 'Greg Chamberlain',
    about() {
      return "Hi! I'm Greg, a software developer with a passion for writing clean, testable code, and contributing to the open-source community. I have experience working with the full stack, including knowledge of multiple languages and framework. Some applications I've developed use JavaScript, React, Redux, Ruby, Rails, Node.js, and GraphQL. I have a passion for modern web technologies (some of the ones I'm most excited about are React and GraphQL) and love continuously learning to expand my development skill set. Check out some of my recent projects (below) to see my engineering and design capabilities.";
    },
    phone: () => '(715) 307-7746',
    email: () => 'gregchamberlain94@gmail.com',
    linkedIn: () => 'https://www.linkedin.com/in/greg-chamberlain',
    github: () => 'https://www.github.com/gregchamberlain',
    projects(_, { ids }) {
      if (ids) {
        return Project.find({ _id: { $in: ids } });
      } else {
        return Project.find();
      }
    },
    project(_, { id }) {
      return Project.findById(id);
    },
    jobs() {
      return Job.find({}, null, { sort: '-createdAt' });
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
    },
    getSignedUrls(_, { files }) {
      return files.map(file => {
        const params = {
          Bucket: 'gregchamberlain-portfolio',
          Key: file.name,
          Expires: 60,
          ContentType: file.type,
          ACL: 'public-read'
        };
        return s3.getSignedUrl('putObject', params);
      });
    }
  }
};

export default resolveFunctions;
