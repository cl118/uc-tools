import DisplayTime from './DisplayTime';
import ElapsedTime from './ElapsedTime';
import CompletedElapsedTime from './CompletedElapsedTime';
import ActionButtons from './ActionButtons';

const PagingLogRow = ({
  post: {
    _id,
    bedNumber,
    forEdProvider,
    providerName,
    providerGroup,
    status,
    notes,
    createdAt,
    updatedAt,
  },
}) => {
  return (
    <>
      <tr
        className={
          status === 'Complete'
            ? 'bg-gray-100 border-b line-through h-[37.5px]'
            : 'bg-white border-b hover:bg-gray-50 h-[37.5px]'
        }
      >
        <th
          scope='row'
          className='py-1.5 px-4 font-medium text-gray-900 whitespace-nowrap'
        >
          {bedNumber}
        </th>
        <td className='py-1.5 px-4'>{forEdProvider}</td>
        <td className='py-1.5 px-4'>{providerName}</td>
        <td className='py-1.5 px-4'>{providerGroup}</td>
        <td className='py-1.5 px-4'>{status}</td>
        <td className='py-1.5 px-4'>
          <DisplayTime utcDate={createdAt} />
        </td>
        <td className='py-1.5 px-4'>
          {status === 'Complete' ? <DisplayTime utcDate={updatedAt} /> : null}
        </td>
        <td className='py-1.5 px-4 inline-flex w-28 h-[37.5px]'>
          {status === 'Paged' || status === 'Re-Paged' ? (
            <ElapsedTime input={createdAt} />
          ) : status === 'Complete' ? (
            <CompletedElapsedTime startTime={createdAt} endTime={updatedAt} />
          ) : null}
        </td>
        <td className='py-1.5 px-4'>{notes}</td>
        <td className='py-1.5 px-4'>
          <ActionButtons _id={_id} />
        </td>
      </tr>
    </>
  );
};

export default PagingLogRow;
