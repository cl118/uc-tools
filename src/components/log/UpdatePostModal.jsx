import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { Modal } from 'flowbite-react';
import 'flowbite';

const UpdatePostModal = () => {
  // Contexts
  const {
    postState: { post },
    showUpdatePostModal,
    setShowUpdatePostModal,
    updatePost,
    setShowToast,
  } = useContext(PostContext);

  const [updatedPost, setUpdatedPost] = useState(post);

  useEffect(() => setUpdatedPost(post), [post]);

  const {
    bedNumber,
    forEdProvider,
    providerName,
    providerGroup,
    status,
    notes,
  } = updatedPost;

  const onChangeUpdatedPostForm = (e) =>
    setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });

  const onClose = () => {
    setShowUpdatePostModal(false);
    resetUpdatePostData();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await updatePost(updatedPost);
    setShowUpdatePostModal(false);
    setShowToast({ show: true, message, type: success ? 'success' : 'danger' });
  };

  const resetUpdatePostData = () => {
    setUpdatedPost({
      bedNumber: '',
      forEdProvider: '',
      providerName: '',
      providerGroup: '',
      status: '',
      notes: '',
    });
  };

  return (
    <Modal show={showUpdatePostModal} size='md' popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <form className='px-6 pb-8 space-y-6' onSubmit={onSubmit}>
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
            Update Log Entry
          </h3>
          <div className='w-full'>
            <label
              htmlFor='bedNumber'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Bed #
            </label>
            <input
              name='bedNumber'
              type='text'
              id='bedNumber'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='25'
              value={bedNumber}
              onChange={onChangeUpdatedPostForm}
              required
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='forEdProvider'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              ED Provider
            </label>
            <input
              name='forEdProvider'
              type='text'
              id='forEdProvider'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='For which ED Provider?'
              value={forEdProvider}
              onChange={onChangeUpdatedPostForm}
              required
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='providerName'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Provider's Name
            </label>
            <input
              name='providerName'
              type='text'
              id='providerName'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Dr. Doolittle'
              value={providerName}
              onChange={onChangeUpdatedPostForm}
              required
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='providerGroup'
              className='block mb-2 text-sm font-medium text-gray-900'
              required
            >
              Provider's Group
            </label>
            <input
              name='providerGroup'
              type='text'
              id='providerGroup'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='IMHS'
              value={providerGroup}
              onChange={onChangeUpdatedPostForm}
              required
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='status'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Status
            </label>
            <select
              name='status'
              id='status'
              className='w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 block p-2.5'
              value={status}
              onChange={onChangeUpdatedPostForm}
              required
            >
              <option>Select one</option>
              <option>Paged</option>
              <option>Re-Paged</option>
              <option>Complete</option>
            </select>
          </div>
          <div className='w-full'>
            <label
              htmlFor='notes'
              className='block mb-2 text-sm font-medium text-gray-900'
              required
            >
              Notes/Comments
            </label>
            <input
              name='notes'
              type='text'
              id='notes'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Ext 47079'
              value={notes}
              onChange={onChangeUpdatedPostForm}
              required
            />
          </div>
          <div className='w-full'>
            <button
              type='submit'
              className='w-full text-gray-50 bg-gradient-to-tr from-[#011F5B] to-blue-700 hover:bg-gradient-to-bl active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-out duration-100'
            >
              Submit
            </button>
            <button
              type='button'
              onClick={onClose}
              className='w-full text-gray-600 hover:text-white border border-gray-600 hover:border-red-400 hover:bg-red-400 active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-out duration-100 mt-1'
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdatePostModal;
