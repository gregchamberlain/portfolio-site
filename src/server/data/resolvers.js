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
    projects() {
      return Project.find();
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
