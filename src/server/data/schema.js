export default `
type Rocket {
  id: Int!
  name: String!
  lifespan: String
  mass: Float
}

type Query {
  rockets: [Rocket]
}

type Mutation {
  createRocket(name: String!, lifespan: String!, mass: Float!): Rocket
}
`;
