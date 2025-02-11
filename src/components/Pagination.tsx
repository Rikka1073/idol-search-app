import React from "react";

type PaginationProps = {
  setPage: (page: number) => void;
  page: number;
  limit: number;
  data: [];
};

const Pagination = ({ setPage, page, limit, data }: PaginationProps) => {
  const oncClickNext = () => {
    setPage(page + 1);
  };

  const oncClickPrev = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="join grid grid-cols-2">
          <button
            onClick={oncClickPrev}
            className="join-item btn border-green-300 bg-white rounded-tl-xl rounded-bl-xl"
            disabled={page === 1}
          >
            Previous page
          </button>
          <button
            onClick={oncClickNext}
            className="join-item btn border-green-300 bg-white rounded-tr-xl rounded-br-xl"
            disabled={data.length < limit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
