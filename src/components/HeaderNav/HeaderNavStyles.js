import { Navbar, Form } from 'react-bootstrap';
import styled from 'styled-components';
import palette from '../../palette';
import { ReactComponent as Search } from '../../Icons/magnifier.svg';

const Nav = styled(Navbar)`
  background-color: ${palette.darkBlack};
`;

const BrandTitle = styled.h1`
  font-family: Merriweather;
  font-size: 36px !important;
  color: ${palette.gray} !important;
  margin: 0;
`;

const BrandSubTitle = styled.h1`
  font-family: Lato;
  font-size: 24px;
  margin: 0;
  color: ${palette.gray};
`;

const Wrapped = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 2rem;
  flex-direction: column;
  padding: 5px;
`;

const Input = styled(Form.Control)`
  width: 500px !important;
  padding: 0.5rem;
  margin-left: 3rem;
`;

const SearchIcon = styled(Search)`
  fill: ${palette.gray};
`;

export {
  Nav,
  BrandTitle,
  BrandSubTitle,
  Wrapped,
  Input,
  SearchIcon
};
