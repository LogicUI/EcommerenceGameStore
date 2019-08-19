import React, { useState } from 'react';
import HomeHero from '../HomeHero/HomeHero';
import Product from '../PopularProduct/PopularProduct';
import { Pagination } from 'react-bootstrap';
import PaginationNumber from '../PaginationNumber/PaginationNumber';
import { useSelector } from 'react-redux';
import usePagination from '../CustomHooks/usePagination';

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
      Most popular
      <PaginationNumber
        itemsPerPage={4}
        totalItems={popularProducts.length}
        paginate={paginate}
      />
      <div
        style={{
          display: 'flex'
        }}
      >
        {popularProducts
          .slice(currentPage.indexOfFirstItem, currentPage.indexOfLastItem)
          .map((product) => (
            <Product {...product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
