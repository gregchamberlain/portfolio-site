export default `
type Project {
  id: ID!
  name: String!
  description: String!
  githubUrl: String
  liveUrl: String
  skillsUsed: [String]
  image: String
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
  image: String
}

input JobInput {
  id: String
  companyName: String!
  position: String!
  duration: String
  location: String
  highlights: [String]
}

input FileInput {
  name: String!
  type: String!
}

type Mutation {
  createProject(project: ProjectInput!): Project
  updateProject(project: ProjectInput!): Project
  createJob(job: JobInput!): Job
  updateJob(job: JobInput!): Job
  getSignedUrls(files: [FileInput]!): [String]
}
`;
