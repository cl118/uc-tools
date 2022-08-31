import { useEffect, useState } from 'react';

const useElapsedTimer = (startDate) => {
  const elapsedDate = new Date(startDate).getTime();

  const [elapsedTime, setElapsedTime] = useState(
    new Date().getTime() - elapsedDate
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(new Date().getTime() - elapsedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, [elapsedDate]);

  return getReturnValues(elapsedTime);
};

const getReturnValues = (elapsedTime) => {
  // calculate time left
  const minutes = (Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, '0');
  const seconds = (Math.floor((elapsedTime % (1000 * 60)) / 1000)).toString().padStart(2, '0');

  return [minutes, seconds];
};

export { useElapsedTimer };
