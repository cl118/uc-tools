import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Legend = () => {
  return (
    <div className='flex gap-8 items-center border px-3 py-2'>
      Legend:
      <div className='flex items-center'><FaEdit className='h-5 w-5 mr-2' />Edit</div>
      <div className='flex items-center'><FaTrashAlt className='h-5 w-5 mr-2' />Delete</div>
      <div className='flex items-center'>
        <div className='h-4 w-4 mr-2 inline-flex rounded-full bg-yellow-400' /> &gt; 15 mins elapsed
      </div>
      <div className='flex items-center'><div className='h-4 w-4 mr-2 inline-flex rounded-full bg-red-500' /> &gt; 20 mins elapsed</div>
    </div>
  )
}

export default Legend