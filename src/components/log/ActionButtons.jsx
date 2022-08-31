import { FaEdit, FaTrashAlt, FaRegCheckSquare } from 'react-icons/fa';
import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'

const ActionButtons = ({ _id }) => {
  const { deletePost, findPost, setShowUpdatePostModal, } =
    useContext(PostContext);

  const choosePost = (postId) => {
    findPost(postId);
    setShowUpdatePostModal(true);
  }

  return (
    <>
      <button className='inline-flex text-gray-900 hover:text-gray-400 cursor-pointer active:scale-95' onClick={choosePost.bind(this, _id)}>
        <FaEdit className='h-5 w-5' />
      </button>
      <button className='inline-flex text-gray-900 hover:text-gray-400 cursor-pointer active:scale-95 ml-3' onClick={deletePost.bind(this, _id)}>
        <FaTrashAlt className='h-5 w-5' />
      </button>
    </>
  )
}
export default ActionButtons;