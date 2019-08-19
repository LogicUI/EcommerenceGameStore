import React, { useState } from 'react';
import HomeHero from '../HomeHero/HomeHero';
import Product from '../PopularProduct/PopularProduct';
import PaginationNumber from '../PaginationNumber/PaginationNumber';
import { useSelector } from 'react-redux';
import usePagination from '../CustomHooks/usePagination';
import { FlexWrapper, ProductTtile, ProductHeadings } from './Home.styles';

const Home = () => {
  const { popularProducts } = useSelector((state) => ({
    popularProducts: state.products.productList.filter(
      (product) => product.rating > 3
    )
  }));

  const [currentPage, paginate] = usePagination(4);

  return (
    <div>
      <HomeHero />
      <ProductHeadings>
        <ProductTtile>Most popular:</ProductTtile>
        <PaginationNumber
          itemsPerPage={4}
          totalItems={popularProducts.length}
          paginate={paginate}
          active={currentPage.current}
        />
      </ProductHeadings>
      <FlexWrapper>
        {popularProducts
          .slice(currentPage.indexOfFirstItem, currentPage.indexOfLastItem)
          .map((product) => (
            <Product {...product} />
          ))}
      </FlexWrapper>
    </div>
  );
};

export default Home;
