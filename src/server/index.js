import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './data/schema';
import resolvers from './data/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

if (process.env.NODE_ENV !== 'production') {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));
}

export default app;
