export default `
type Person {
  id: Int!
  name: String!
}

type Query {
  people: [Person]
}

type Mutation {

}
`;
