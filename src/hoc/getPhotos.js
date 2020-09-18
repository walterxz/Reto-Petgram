import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;
