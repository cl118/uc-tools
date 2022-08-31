import { useEffect, useContext, useState, useMemo } from 'react'
import { PostContext } from '../../contexts/PostContext'
import FadeLoader from 'react-spinners/FadeLoader';
import PagingLogRow from './PagingLogRow'
import Pagination from './Pagination'

const PagingLog = () => {
  const {
    postState: { post, posts, postsLoading },
    getPosts,
    showToast: { show, message, type },
    setShowToast,
  } = useContext(PostContext);

  useEffect(() => {
    const getPostsWrapper = () => getPosts();
    getPostsWrapper();
  }, []);

  const pageSize = 15

  const [currentPage, setCurrentPage] = useState(1);

  let body = null;

  if (postsLoading) {
    body = (
      <div className='flex justify-center mt-2'>
        <FadeLoader />
      </div>
    );
  } else {
    body = (
      <>
        <div className='max-w-[1440px] mx-auto overflow-x-auto relative shadow-md rounded-lg p-4'>
          <div className='w-full h-full'>
            <table className='w-full text-sm text-left text-gray-900'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope='col' className='py-1 px-4'>
                    Bed #
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    For
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    Provider Paged
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    Group
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    Status
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    Time Paged
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    Time Called
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    Time Elapsed
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    Notes
                  </th>
                  <th scope='col' className='py-1 px-4'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((post) => (
                  <PagingLogRow key={post._id} post={post} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination className={'w-full flex justify-center'} currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCount={posts.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)} />
        </div>
      </>
    )
  }

  return (
    <>
      {body}
    </>
  );
};

export default PagingLog;