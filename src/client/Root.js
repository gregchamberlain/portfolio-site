import React from 'react';
import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import './styles.css';
import App from './App';

let config;
if (process.env.NODE_ENV === 'production') {
  config = { dataIdFromObject: o => o.id, shouldBatch: true };
} else {
  config = {
    networkInterface: createBatchingNetworkInterface({
      uri: 'http://gregchamberlain.tech/graphql',
      batchInterval: 10
    }),
    // networkInterface: createBatchingNetworkInterface({ uri: 'http://localhost:3001/graphql' }),
    dataIdFromObject: o => o.id
  };
}

const client = new ApolloClient(config);

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Root;
