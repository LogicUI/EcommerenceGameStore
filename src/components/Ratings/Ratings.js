import React from 'react';
import { ReactComponent as FilledStars } from '../../Icons/filledStars.svg';
import { ReactComponent as EmptyStars } from '../../Icons/emptyStar.svg';

const Ratings = ({ rating }) => {
  const displayRatings = () => {
    const ratings = [];

    for (let index = 0; index < rating; index++) {
      ratings.push(<FilledStars width="40px" height="40px" />);
    }

    for (let index = 0; index < 5 - rating; index++) {
      ratings.push(<EmptyStars width="40px" height="40px" />);
    }
    return ratings;
  };
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'flex'
      }}
    >
      {displayRatings()}
    </section>
  );
};

export default Ratings;
