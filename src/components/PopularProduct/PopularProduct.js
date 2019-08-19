import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CardProduct, Title, SubTitle } from './PopularProduct.styles.js';
import Ratings from '../Ratings/Ratings';

const Product = ({ image, title, price, rating, release }) => {
  return (
    <CardProduct>
      <Card.Img variant="top" src={image} width="200px" height="200px" />
      <Card.Body style={{ marginBottom: '2rem' }}>
        <Title>{title}</Title>
        <SubTitle className="text-danger">${price}</SubTitle>
        <Card.Text>
          <Ratings rating={rating} />
          {release && <h4 className="text-center">Release Date:{release}</h4>}
        </Card.Text>

        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </CardProduct>
  );
};

export default Product;
