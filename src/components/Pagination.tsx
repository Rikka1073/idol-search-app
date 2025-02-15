type IdolData = {
  id: number;
  name: string;
  group: string;
  country: string;
  birthday: string;
  img: string;
};

type PaginationProps = {
  setPage: (page: number) => void;
  page: number;
  limit: number;
  data: IdolData[];
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
            className="join-item btn  bg-white rounded-tl-xl rounded-bl-xl border-black"
            disabled={page === 1}
          >
            Previous page
          </button>
          <button
            onClick={oncClickNext}
            className="join-item btn  bg-white rounded-tr-xl rounded-br-xl border-black"
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
