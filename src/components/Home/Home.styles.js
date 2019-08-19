import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'flex')};
`;

const ProductTtile = styled.h1`
  font-family: Merriweather;
  font-size: 36px;
  font-weight: bold;
  margin-right: 2rem;
`;

const ProductHeadings = styled(FlexWrapper)`
  margin-top: 2rem;
  margin-left: 2rem;
`;

export { FlexWrapper, ProductTtile, ProductHeadings };
