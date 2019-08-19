import { useState } from 'react';

const usePagination = (itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState({
    current: 1,
    indexOfFirstItem: 0,
    indexOfLastItem: 1 * itemsPerPage
  });

  const paginate = (pageNumber) =>
    setCurrentPage((prev) => ({
      ...prev,
      current: pageNumber,
      indexOfLastItem: pageNumber * itemsPerPage,
      indexOfFirstItem: pageNumber * itemsPerPage - itemsPerPage
    }));

  return [currentPage, paginate];
};

export default usePagination;
