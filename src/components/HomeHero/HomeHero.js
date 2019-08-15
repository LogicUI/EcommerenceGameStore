import React, { useState, useEffect, Fragment } from 'react';
import axios from '../../api/axios';
import {
  BackGroundHeading,
  Wrapper,
  TitleHeading,
  Price,
  WordWrapper,
  TitleSub,
  StyledButton,
  CenterSpinner
} from './HomeHeroStyles';
import { Spinner } from 'react-bootstrap';

const HomeHero = () => {
  const [mainImage, setImage] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('home');
        setImage(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shouldLoad = () => {
    if (Object.keys(mainImage).length > 0) {
      return (
        <BackGroundHeading image={mainImage.image}>
          <Wrapper>
            <WordWrapper>
              <TitleHeading style={{ color: 'white' }}>
                {mainImage.title}
              </TitleHeading>
              <TitleSub>Release Date:{mainImage.release}</TitleSub>
              <Price>Preorder Price:{mainImage.price}</Price>
              <StyledButton variant="primary">Order Now</StyledButton>
            </WordWrapper>
            <iframe
              title="trailer"
              src={mainImage.video}
              height="400px"
              width="500px"
            />
          </Wrapper>
        </BackGroundHeading>
      );
    } else {
      return (
        <CenterSpinner>
          <Spinner animation="border" variant="primary" size="lg" />
        </CenterSpinner>
      );
    }
  };

  return <Fragment>{shouldLoad()}</Fragment>;
};

export default HomeHero;
