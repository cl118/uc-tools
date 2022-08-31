import { PostContext } from '../contexts/PostContext';
import { useContext, useEffect } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import PagingLog from '../components/log/PagingLog';
import PagingForm from '../components/log/PagingForm';
import UpdatePostModal from '../components/log/UpdatePostModal'
import Footer from '../components/layout/Footer'

const Log = () => {
  const {
    postState: { post, posts, postsLoading },
    getPosts,
  } = useContext(PostContext);

  useEffect(() => {
    const getPostsWrapper = () => getPosts();
    getPostsWrapper();
  }, []);

  let body = null;

  if (postsLoading) {
    body = (
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <FadeLoader />
      </div>
    );
  } else {
    body = (
      <div className='px-4'>
        <PagingForm />
        <PagingLog />
        <Footer />
      </div>
    );
  }

  return (
    <>
      {body}
      {post !== null && <UpdatePostModal />}
    </>
  );
};

export default Log;