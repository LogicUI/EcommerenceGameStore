import React, { useState } from 'react';
import HomeHero from '../HomeHero/HomeHero';
import Product from '../PopularProduct/PopularProduct';
import { Pagination } from 'react-bootstrap';
import PaginationNumber from '../PaginationNumber/PaginationNumber';

const Home = ({ products }) => {
  const [currentPage, setCurrentpage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filterItemsBy = (callback) => {
    return products.filter(callback).slice(indexOfFirstItem, indexOfLastItem);
  };


  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  return (
    <div>
      <HomeHero />
      Most popular
      <PaginationNumber
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        paginate={paginate}
      />
      <div
        style={{
          display: 'flex'
        }}
      >
        {filterItemsBy((product) => product.rating > 3).map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
