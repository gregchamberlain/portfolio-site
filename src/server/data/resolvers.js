const resolveFunctions = {
  Query: {
    people() {
      return people;
    }
  },
  Mutation: {
    createPerson(_, { name }) {
      const person = { id: people.length + 1, name };
      people.push(person);
      return person;
    }
  }
};

const people = [
  {id: 1, name: 'Bob'},
  {id: 2, name: 'John'},
  {id: 3, name: 'Sally'},
  {id: 4, name: 'Julie'},
];

export default resolveFunctions;
