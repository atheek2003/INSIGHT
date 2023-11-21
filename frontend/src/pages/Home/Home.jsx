import React from 'react';
import { Banner } from './Banner';
import BookCards from '../shared/BookCards';
import FavoriteBook from './FavoriteBook';
import BestSeller from './BestSeller';
import OtherBooks from './OtherBooks';
import PromoBanner from './PromoBanner';
import Review from './Review';

export const Home = () => {
  // Define the background color style
  const containerStyle = {
    backgroundColor: 'orange', // Change this to the color you want
  }
  return (
    <div style={containerStyle}>
      <Banner />
      <BestSeller />
      <FavoriteBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};
