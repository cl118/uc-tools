import React from 'react';
import { Modal, Button } from 'flowbite-react';

const WelcomeModal = ({ showModal, setShowModal }) => {
  const onClick = () => {
    setShowModal(false);
    console.log(showModal);
  };
  return (
    <Modal show={showModal} size='lg' onClose={onClick}>
      <Modal.Header>Welcome!</Modal.Header>
      <Modal.Body>
        <div className='p-6 space-y-6'>
          <p className='text-base leading-relaxed text-gray-500'>
            Thank you for visiting my Unit Clerk Tools web app! To demo the app
            without a registered account, you may continue with the demo
            credentials:
          </p>
          <p className='text-base leading-relaxed text-gray-500'>
            username: user <br />
            password: password
          </p>
          <p className='text-base leading-relaxed text-gray-500'>- Chris</p>
        </div>
        <div className='flex justify-center p-6'>
          <button
            className='font-semibold px-8 py-2 bg-gradient-to-tr from-[#011F5B] to-blue-700 hover:bg-gradient-to-bl text-gray-50 rounded-lg border-gray-400 cursor-pointer active:scale-95'
            onClick={onClick}
          >
            Close
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WelcomeModal;
