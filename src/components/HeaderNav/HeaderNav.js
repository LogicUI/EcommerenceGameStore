import React from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import {
  Nav,
  BrandTitle,
  BrandSubTitle,
  Wrapped,
  Input,
  SearchIcon,
} from './HeaderNavStyles';
import ShoppingCartIcon from "../Cart/Cart";

const HeaderNav = () => {
  return (
    <Nav>
      <Wrapped>
        <BrandTitle>GameArms</BrandTitle>
        <BrandSubTitle>All Your Gaming Needs</BrandSubTitle>
      </Wrapped>
      <Form>
        <InputGroup>
          <Input type="input" placeholder="Enter your search query here..." />
          <InputGroup.Append>
            <Button type="submit" variant="primary">
              <SearchIcon width="24px" height="24px" fill="white" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      <ShoppingCartIcon />
    </Nav>
  );
};

export default HeaderNav;
