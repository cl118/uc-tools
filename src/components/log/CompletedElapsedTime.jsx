import { useStaticElapsedTimer } from '../../hooks/useStaticElapsedTimer'

const CompletedElapsedTime = ({ startTime, endTime }) => {
  const [minutes, seconds] = useStaticElapsedTimer(startTime, endTime)

  return (
    <>
      {minutes} : {seconds}
    </>
  )
}

export default CompletedElapsedTime