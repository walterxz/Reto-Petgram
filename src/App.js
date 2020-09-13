import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCard } from './components/ListOfPhotoCard';
import { Logo } from './components/Logo';

import { GlobalStyle } from './components/styles/GlobalStyle';

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
);
