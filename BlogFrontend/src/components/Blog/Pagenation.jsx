import { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(
      <li key={1}>
        <button
          onClick={() => paginate(1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-black text-white font-bold"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          1
        </button>
      </li>
    );

    if (currentPage > 3) {
      pageNumbers.push(
        <li key="left-ellipsis">
          <button
            onClick={() => paginate(currentPage - 3)}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            ...
          </button>
        </li>
      );
    }

    for (
      let number = Math.max(2, currentPage - 1);
      number <= Math.min(totalPages - 1, currentPage + 1);
      number++
    ) {
      pageNumbers.push(
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded-lg ${
              number === currentPage
                ? "bg-black text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {number}
          </button>
        </li>
      );
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <li key="right-ellipsis">
          <button
            onClick={() => paginate(currentPage + 3)}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            ...
          </button>
        </li>
      );
    }

    if (totalPages > 1) {
      pageNumbers.push(
        <li key={totalPages}>
          <button
            onClick={() => paginate(totalPages)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-black text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-col items-center mb-[4rem] space-y-6">
      {/* Pagination controls */}
      <nav>
        <ul className="flex space-x-2">
          <li>
            <button
              onClick={() =>
                paginate(currentPage > 1 ? currentPage - 1 : currentPage)
              }
              disabled={currentPage === 1}
              className={`px-4 py-2 text-white ${
                currentPage === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white"
              } rounded-lg`}
            >
              {"<-"}
            </button>
          </li>

          {renderPageNumbers()}

          <li>
            <button
              onClick={() =>
                paginate(
                  currentPage < totalPages ? currentPage + 1 : currentPage
                )
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-white ${
                currentPage === totalPages
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white"
              } rounded-lg`}
            >
              {"->"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
