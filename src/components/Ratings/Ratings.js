import React from 'react';
import { ReactComponent as FilledStars } from '../../Icons/filledStars.svg';
import { ReactComponent as EmptyStars } from '../../Icons/emptyStar.svg';
import uniqid from 'uniqid';

const Ratings = ({ rating }) => {
  const displayRatings = () => {
    const ratings = [];

    for (let index = 0; index < rating; index++) {
      ratings.push(<FilledStars width="24px" height="24px" key={uniqid()} />);
    }

    for (let index = 0; index < 5 - rating; index++) {
      ratings.push(<EmptyStars width="24px" height="24px" key={uniqid()} />);
    }
    return ratings;
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'flex',
        justifyContent: 'center',
        margin: '1rem 0'
      }}
    >
      {displayRatings()}
    </div>
  );
};

export default Ratings;
