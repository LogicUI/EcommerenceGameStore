import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationNumber = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let index = 1; index < Math.ceil(totalItems / itemsPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <Pagination>
      {pageNumbers.map((page) => {
        return (
          <Pagination.Item key={page} onClick={() => paginate(page)}>
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default PaginationNumber;
