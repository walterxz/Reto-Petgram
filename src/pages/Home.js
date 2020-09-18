import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCard } from '../components/ListOfPhotoCard';

export const Home = ({categoryId}) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </>
  );
};
