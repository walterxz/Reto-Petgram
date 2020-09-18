import React from 'react';
import { PhotoCard } from '../components/PhotoCard';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } });
  if (loading) return <p>Cargando</p>;
  if (error) return <p>Error</p>;

  console.log(data);
  return <PhotoCard {...data.photo} />;
};
