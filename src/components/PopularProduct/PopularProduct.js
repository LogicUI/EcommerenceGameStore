import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CardProduct, Title, SubTitle } from './PopularProduct.styles.js';
import Ratings from '../Ratings/Ratings';

const Product = ({ image, title, price, rating }) => {
  return (
    <CardProduct>
      <Card.Img variant="top" src={image} width="200px" height="200px" />
      <Card.Body>
        <Title>{title}</Title>
        <SubTitle className="text-danger">${price}</SubTitle>
        <Card.Text>
          <Ratings rating={rating} />
        </Card.Text>

        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </CardProduct>
  );
};

export default Product;
