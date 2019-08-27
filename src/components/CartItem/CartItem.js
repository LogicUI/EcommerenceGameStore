import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import { CartHeading, CartItemDetail, CartContainer } from './CartItemStyles';

const CartItem = () => {
  const { cartItems } = useSelector((state) => ({
    cartItems: state.cart.cart
  }));

  return (
    <CartContainer >
      <CartHeading>Title</CartHeading>
      <CartHeading>Price</CartHeading>
      <CartHeading>Quantity</CartHeading>
      <CartHeading>Item</CartHeading>
      {cartItems.map((item) => {
        const { title, image, quantity, price } = item;
        return (
          <Fragment>
            <CartItemDetail>{title}</CartItemDetail>
            <CartItemDetail>${quantity * price}</CartItemDetail>
            <CartItemDetail>{quantity}</CartItemDetail>
            <Image src={image} width="100px" height="100px" roundedCircle />
          </Fragment>
        );
      })}
    </CartContainer>
  );
};

export default CartItem;
