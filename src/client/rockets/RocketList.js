import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const RocketList = ({ data }) => (
  <div>
    <h1>Rockets</h1>
    { data.loading ? <div>Loading...</div> : (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lifespan</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {data.rockets.map(rocket => (
            <tr key={rocket.id}>
              <td>{rocket.name}</td>
              <td>{rocket.lifespan}</td>
              <td>{rocket.mass} kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

const query = gql`query Rockets {
  rockets {
    id
    name
    lifespan
    mass
  }
}`;

export default graphql(query)(RocketList);
