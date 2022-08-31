const DisplayTime = ({utcDate}) => {

  const date = new Date(utcDate)

  const padTo2Digits = (num) => num.toString().padStart(2, '0');

  
  const hours = padTo2Digits(date.getHours())
  const minutes = padTo2Digits(date.getMinutes())
  
  return (
    <>
      {`${hours}:${minutes}`}
    </>
  )
}

export default DisplayTime