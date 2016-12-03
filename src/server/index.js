import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const MONGO_URI = process.env.MONGO_URI || require('../../tools/config').MONGO_URI;
import typeDefs from './data/schema';
import resolvers from './data/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static('dist/client'));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
  });
} else {
  const cors = require('cors');
  app.use(cors());
}

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

const PORT = process.env.PORT || 3001;

mongoose.connect(MONGO_URI, (mErr) =>  {
  if (mErr) return console.error(mErr);
  console.log('MongoDB Connected');
  app.listen(PORT, function(err) {
    if (err) return console.error(err);
    console.log('Listening on port', PORT);
  });
});
