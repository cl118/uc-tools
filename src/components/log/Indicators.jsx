export const YellowIndicator = () => (
  <div className='relative flex items-center'>
    <div className='h-4 w-4 ml-2 absolute inline-flex rounded-full bg-yellow-300 animate-ping opacity-75' />
    <div className='h-4 w-4 ml-2 inline-flex rounded-full bg-yellow-400' />
  </div>
)

export const RedIndicator = () => (
  <div className='relative flex items-center'>
    <div className='h-4 w-4 ml-2 absolute inline-flex rounded-full bg-red-300 animate-ping opacity-75' />
    <div className='h-4 w-4 ml-2 inline-flex rounded-full bg-red-500' />
  </div>
)