import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const PersonList = ({ data }) => (
  <div>
    <h1>People</h1>
    { data.loading ? <div>Loading...</div> : (
      <ul>
        {data.people.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    )}
  </div>
);

const query = gql`query {
  people {
    id
    name
  }
}`;

export default graphql(query)(PersonList);
