import styled from 'styled-components';

const CartHeading = styled.h1`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: MerriWeather;
`;

const CartItemDetail = styled.h1`
  font-family: Latio;
  font-size: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  align-items: center;
`;


const CartContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    justify-items:center;
    grid-gap:20px;
`

export { CartHeading, CartItemDetail , CartContainer};
