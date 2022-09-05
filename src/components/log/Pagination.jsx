import Legend from './Legend';

const Pagination = ({ totalCount, pageSize, currentPage, setCurrentPage }) => {
  const handleClickNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleClickPage = (e) => {
    if (currentPage !== Number(e.target.id)) {
      console.log(Number(e.target.id));
      setCurrentPage(Number(e.target.id));
    }
  };

  const pageNumbers = [];
  const numberOfPages = Math.ceil(totalCount / pageSize);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className='flex items-center justify-between px-4 pt-4 bg-white border-t border-gray-200 sm:px-6'>
        <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-gray-700'>
              Showing
              <span className='font-medium'>
                {' '}
                {pageSize * currentPage - (pageSize - 1)}{' '}
              </span>
              to
              <span className='font-medium'>
                {' '}
                {totalCount < pageSize * currentPage
                  ? totalCount
                  : pageSize * currentPage}{' '}
              </span>
              of
              <span className='font-medium'> {totalCount} </span>
              results
            </p>
          </div>
          <Legend />
          <div>
            <div
              className='relative z-0 inline-flex -space-x-px rounded-md shadow-sm'
              aria-label='Pagination'
            >
              <button
                onClick={handleClickPrev}
                disabled={currentPage === 1}
                className='relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50'
              >
                <span className='sr-only'>Previous</span>

                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              {pageNumbers.map((number) => {
                return (
                  <button
                    key={number}
                    id={number}
                    onClick={handleClickPage}
                    className={
                      number === currentPage
                        ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                    }
                  >
                    {number}
                  </button>
                );
              })}
              <button
                onClick={handleClickNext}
                disabled={currentPage === numberOfPages}
                className='relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50'
              >
                <span className='sr-only'>Next</span>

                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
