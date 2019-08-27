import React from 'react';
import HomeHero from '../HomeHero/HomeHero';
import Product from '../Product/Product';
import PaginationNumber from '../PaginationNumber/PaginationNumber';
import { useSelector } from 'react-redux';
import usePagination from '../CustomHooks/usePagination';
import uniqid from 'uniqid';
import { ProductTtile, ProductHeadings, GridWrapper } from './Home.styles';

const Home = () => {
  const { popularProducts, promoProducts } = useSelector((state) => ({
    popularProducts: state.products.productList.filter(
      (product) => product.rating > 3
    ),
    promoProducts: state.products.productList.filter((product) => product.promo)
  }));

  const [currentPopular, paginatePopular] = usePagination(3);
  const [currentSales, paginateSales] = usePagination(3);

  return (
    <div>
      <HomeHero />
      <ProductHeadings>
        <ProductTtile>Most popular:</ProductTtile>
        <PaginationNumber
          itemsPerPage={3}
          totalItems={popularProducts.length}
          paginate={paginatePopular}
          active={currentPopular.current}
        />
      </ProductHeadings>
      <GridWrapper>
        {popularProducts
          .slice(
            currentPopular.indexOfFirstItem,
            currentPopular.indexOfLastItem
          )
          .map((product) => (
            <Product {...product} key={uniqid()} />
          ))}
      </GridWrapper>
      <ProductHeadings>
        <ProductTtile>Hot Sales:</ProductTtile>
        <PaginationNumber
          itemsPerPage={3}
          totalItems={promoProducts.length}
          paginate={paginateSales}
          active={currentSales.current}
        />
      </ProductHeadings>
      <GridWrapper>
        {promoProducts
          .slice(currentSales.indexOfFirstItem, currentSales.indexOfLastItem)
          .map((product) => (
            <Product {...product} key={uniqid()} />
          ))}
      </GridWrapper>
    </div>
  );
};

export default Home;
