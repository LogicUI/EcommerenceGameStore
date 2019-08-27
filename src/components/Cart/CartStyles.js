import styled from 'styled-components';
import palette from '../../palette';
import { ReactComponent as ShoppingCart } from '../../Icons/shopping-cart.svg';

const ShoppingCartIcon = styled(ShoppingCart)`
  fill: ${palette.gray};
  cursor: pointer;
  &:hover {
    fill: #bebebe;
  }
`;

const ShoppingCartWrapper = styled.div`
  position: absolute;
  right: 50px;
`;

export { ShoppingCartIcon, ShoppingCartWrapper };
