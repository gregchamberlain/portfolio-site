export default `
type Project {
  id: ID!
  name: String!
  description: String!
  githubUrl: String
  liveUrl: String
  skillsUsed: [String]
}

type Job {
  id: ID!
  companyName: String!
  position: String!
  duration: String
  location: String
  highlights: [String]
}

type Query {
  projects: [Project]
  jobs: [Job]
}

input ProjectInput {
  id: String
  name: String!
  description: String!
  githubUrl: String
  liveUrl: String
  skillsUsed: [String]
}

input JobInput {
  id: String
  companyName: String!
  position: String!
  duration: String
  location: String
  highlights: [String]
}

type Mutation {
  createProject(project: ProjectInput!): Project
  updateProject(project: ProjectInput!): Project
  createJob(job: JobInput!): Job
  updateJob(job: JobInput!): Job
}
`;
