const resolveFunctions = {
  Query: {
    rockets() {
      return rockets;
    }
  },
  Mutation: {
    createRocket(_, args) {
      const rocket = args;
      rocket.id = rockets.length + 1;
      rockets.push(rocket);
      return rocket;
    }
  }
};

const rockets = [
  {id: 1, name: 'Saturn V', lifespan: '1967-1973', mass: 127000 },
  {id: 2, name: 'N1', lifespan: '1969-1972', mass: 105000 },
  {id: 3, name: 'Falcon 9 1.1', lifespan: '2013-Present', mass: 13150 },
  {id: 4, name: 'Delta IV Heavy', lifespan: '2004-Present', mass: 28790 },
  {id: 5, name: 'Saturn 1B', lifespan: '1966-1975', mass: 21000 },
  {id: 6, name: 'Angara 5', lifespan: '2014-Present', mass: 28500 },
  {id: 7, name: 'Atlas V', lifespan: '2002-Present', mass: 12500 },
];

export default resolveFunctions;
