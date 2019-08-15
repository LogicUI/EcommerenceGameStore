import styled from 'styled-components';
import palette from '../../palette';
import { Button } from 'react-bootstrap';

const BackGroundHeading = styled.div`
  background-image: linear-gradient(
      rgba(20, 20, 20, 0.3),
      rgba(20, 20, 20, 0.3)
    ),
    url(${(props) => props.image});
  background-size: cover;
  height: 500px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  position: absolute;
  right: 50px;
  bottom: 50px;
`;

const TitleHeading = styled.h1`
  margin-right: 5rem;
  color: ${palette.gray};
  font-family: Merriweather;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const TitleSub = styled(TitleHeading)`
  font-size: 2rem;
  font-family: Lato;
`;

const Price = styled(TitleSub)`
  font-size: 1.5rem;
`;

const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: 250px;
`;

const CenterSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export {
  BackGroundHeading,
  Wrapper,
  TitleHeading,
  TitleSub,
  Price,
  WordWrapper,
  StyledButton,
  CenterSpinner
};
