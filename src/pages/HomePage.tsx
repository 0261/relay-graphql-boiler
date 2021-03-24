import React from 'react';
import { graphql, GraphQLTaggedNode, useLazyLoadQuery } from 'react-relay';
import { HomePageQuery, HomePageQueryResponse } from '../__generated__/HomePageQuery.graphql';

const query: GraphQLTaggedNode = graphql`
  query HomePageQuery(
    $id: Int!
  ){
    user(id: $id) {
      id
    }
  }
`;

function HomePage(): JSX.Element {

  const data: HomePageQueryResponse = useLazyLoadQuery<HomePageQuery>(query,
    {
      id: 1131,
    },
    {
      fetchPolicy: 'store-or-network',
    },
  );

  return (
    <div>
      HomePage
    </div>
  );
}

export default HomePage;
