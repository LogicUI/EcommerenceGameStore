import React, { useState } from 'react';
import { ShoppingCartIcon, ShoppingCartWrapper } from './CartStyles';
import ModalComponent from '../ModalComponent/ModalComponent';

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
      />
    </ShoppingCartWrapper>
  );
};

export default Cart;
