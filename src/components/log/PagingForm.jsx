import { useState, useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

const PagingForm = () => {
  const { addPost, setShowToast } = useContext(PostContext);

  const [newPost, setNewPost] = useState({
    bedNumber: '',
    forEdProvider: '',
    providerName: '',
    providerGroup: '',
    status: '',
    notes: '',
  });

  const {
    bedNumber,
    forEdProvider,
    providerName,
    providerGroup,
    status,
    notes,
  } = newPost;

  const onChangeNewPostForm = (e) =>
    setNewPost({ ...newPost, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await addPost(newPost);
    resetAddPostData();
    // setShowToast({ show: true, message, type: success ? 'success' : 'danger' });
  };

  const resetAddPostData = () => {
    setNewPost({
      bedNumber: '',
      forEdProvider: '',
      providerName: '',
      providerGroup: '',
      status: '',
      notes: '',
    });
  };

  return (
    <div className='flex justify-center max-w-[1440px] mx-auto px-4 pt-2 pb-4 mt-4 shadow-md rounded-lg'>
      <form className='flex w-full gap-4' onSubmit={onSubmit}>
        <div className='w-14'>
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
            onChange={onChangeNewPostForm}
            required
          />
        </div>
        <div className='flex-grow'>
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
            onChange={onChangeNewPostForm}
            required
          />
        </div>
        <div className='flex-grow'>
          <label
            htmlFor='providerName'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Paged Provider's Name
          </label>
          <input
            name='providerName'
            type='text'
            id='providerName'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Dr. Doolittle'
            value={providerName}
            onChange={onChangeNewPostForm}
            required
          />
        </div>
        <div className='w-[170px]'>
          <label
            htmlFor='providerGroup'
            className='block mb-2 text-sm font-medium text-gray-900'
            required
          >
            Paged Provider's Group
          </label>
          <input
            name='providerGroup'
            type='text'
            id='providerGroup'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='IMHS'
            value={providerGroup}
            onChange={onChangeNewPostForm}
            required
          />
        </div>
        <div className=''>
          <label
            htmlFor='status'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Status
          </label>
          <select
            name='status'
            id='status'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5'
            value={status}
            onChange={onChangeNewPostForm}
            required
          >
            <option>Select</option>
            <option>Paged</option>
            <option>Re-Paged</option>
            <option>Complete</option>
          </select>
        </div>
        <div className='w-[250px]'>
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
            onChange={onChangeNewPostForm}
            required
          />
        </div>
        <div>
          <label className='invisible block mb-2 text-sm'>something</label>
          <button
            type='submit'
            className='text-gray-50 bg-gradient-to-tr from-[#011F5B] to-blue-700 hover:bg-gradient-to-bl active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-out duration-100'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PagingForm;
