import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import {
  BackGroundHeading,
  Wrapper,
  TitleHeading,
  Price,
  WordWrapper,
  TitleSub ,
  StyledButton
} from './HomeStyles';

const Home = () => {
  const [homePage, setHomePage] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/home');
        setHomePage(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackGroundHeading image={homePage.image}>
      <Wrapper>
        <WordWrapper>
          <TitleHeading style={{ color: 'white' }}>
            {homePage.title}
          </TitleHeading>
          <TitleSub>Release Date:{homePage.release}</TitleSub>
          <Price>Preorder Price:{homePage.price}</Price>
          <StyledButton variant="primary">Order Now</StyledButton>
        </WordWrapper>
        <iframe
          title="trailer"
          src={homePage.video}
          height="400px"
          width="500px"
        />
      </Wrapper>
    </BackGroundHeading>
  );
};

export default Home;
