import React from 'react';
import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import './styles.css';
import App from './App';

let config;
if (process.env.NODE_ENV === 'production') {
  config = {
    networkInterface: createBatchingNetworkInterface({
      batchInterval: 10,
    }),
    dataIdFromObject: o => o.id
  };
} else {
  config = {
    networkInterface: createBatchingNetworkInterface({
      uri: 'https://gregchamberlain.herokuapp.com/graphql',
      batchInterval: 10,
    }),
    // networkInterface: createNetworkInterface({ uri: 'http://localhost:3001/graphql' }),
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
