import React, { useState } from 'react';
import { ShoppingCartIcon, ShoppingCartWrapper } from './CartStyles';
import ModalComponent from '../ModalComponent/ModalComponent';
import CartItems from "../CartItem/CartItem";

const Cart = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ShoppingCartWrapper>
      <ShoppingCartIcon
        width="40px"
        height="40px"
        onClick={() => setModalShow(true)}
      />
      <ModalComponent
        heading="Cart Items"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <CartItems />
      </ModalComponent> 
    </ShoppingCartWrapper>
  );
};

export default Cart;
