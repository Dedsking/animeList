import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <>
      <div className="flex justify-center items-center py-14 px-2 gap-4 text-color-primary text-2xl">
        <button
          onClick={handlePrevPage}
          disabled={page == 1 ? true : false}
          className={`${
            page == 1
              ? "cursor-not-allowed"
              : "transition-all hover:text-color-accent"
          } `}>
          Prev
        </button>

        <p>
          {page} of {lastPage}
        </p>
        {page >= lastPage ? null : (
          <button
            disabled={page == lastPage ? true : false}
            onClick={handleNextPage}
            className={`${
              page >= lastPage
                ? "cursor-not-allowed"
                : "transition-all hover:text-color-accent"
            } `}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
