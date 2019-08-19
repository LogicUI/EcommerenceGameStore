import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const PaginationNumber = ({ itemsPerPage, totalItems, paginate, active }) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <Pagination>
      {pageNumbers.map((page) => {
        return (
          <Pagination.Item
            key={page}
            active={page === active}
            onClick={() => paginate(page)}
          >
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default PaginationNumber;
