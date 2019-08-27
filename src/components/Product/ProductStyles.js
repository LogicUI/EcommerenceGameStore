import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const CardProduct = styled(Card)`
  width: 300px;
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled(Card.Title)`
  font-family: Merriweather;
  font-size: 30px !important;
  font-weight: bold !important;
`;

const SubTitle = styled(Card.Subtitle)`
  font-family: Latio;
  font-size: 24px !important;
`;

const OldPriceText = styled.h1`
  font-size: 12px;
  text-decoration: line-through;
`;

const DiscountText = styled.h1`
  font-size: 12px;
  background-color: #222831;
  color: white;
  padding: 5px;
  margin-left: 10px;
`;

const StocksText = styled.h2`
  margin: 1rem 0;
  font-family: latio;
  font-size: 16px;
  font-weight: bold;
`;

const CustomButton = styled(Button)`
  cursor: pointer;
`;

export {
  CardProduct,
  Title,
  SubTitle,
  OldPriceText,
  DiscountText,
  StocksText,
  CustomButton
};
