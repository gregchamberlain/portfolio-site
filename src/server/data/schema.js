export default `
type Project {
  id: ID!
  name: String!
  description: String!
  githubUrl: String
  liveUrl: String
  skillsUsed: [String]
}

type Query {
  projects: [Project]
}

input ProjectInput {
  name: String!
  description: String!
  githubUrl: String
  liveUrl: String
  skillsUsed: [String]
}

type Mutation {
  createProject(project: ProjectInput!): Project
}
`;
