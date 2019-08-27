import React from 'react';
import { Card,} from 'react-bootstrap';
import {
  CardProduct,
  Title,
  SubTitle,
  OldPriceText,
  DiscountText,
  StocksText,
  CustomButton
} from './ProductStyles';
import Ratings from '../Ratings/Ratings';
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../redux/cart/cartActions";

const Product = (props) => {
  const {  image,
  title,
  price,
  rating,
  release,
  stocks,
  promo,
  discount} = props
  const dispatch = useDispatch();
 
  return (
    <CardProduct>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Title>{title}</Title>
        {promo ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SubTitle className="text-danger">
              $ {(((100 - discount) / 100) * price).toFixed(2)}
            </SubTitle>
            <OldPriceText>{price}</OldPriceText>
            <DiscountText>{discount} % off</DiscountText>
          </div>
        ) : (
          <SubTitle className="text-danger">${price}</SubTitle>
        )}

          <Ratings rating={rating} />
          {release && <h5>This is a preorder item</h5>}
          {release && <h5 className="text-center">Release Date:{release}</h5>}
  
        {stocks < 5 && <StocksText>Only {stocks} stocks left!!</StocksText>}
        <CustomButton variant="primary" onClick={() => dispatch(addItemToCart(props))}>Add To Cart</CustomButton>
      </Card.Body>
    </CardProduct>
  );
};

export default Product;
