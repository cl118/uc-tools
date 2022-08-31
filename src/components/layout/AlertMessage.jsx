import { Alert } from 'flowbite-react'

const AlertMessage = ({ info }) => {
return (
    <>
      {info === null ? null : (
        <Alert color='failure'><span className='text-xs font-semibold'>{info.message}.</span></Alert>
      )}
    </>
  )
} 

export default AlertMessage;