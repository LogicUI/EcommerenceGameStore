import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const CardProduct = styled(Card)`
  width: 250px;
  padding: 1rem;
  margin: 2rem;
`;

const Title = styled(Card.Title)`
  font-family: Merriweather;
  font-size: 24px !important;
`;

const SubTitle = styled(Card.Subtitle)`
  font-family: Latio;
  font-size: 24px !important;
`;

export { CardProduct, Title , SubTitle};
