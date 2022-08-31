const useStaticElapsedTimer = (startDate, endDate) => {
  const elapsedTime = new Date(endDate).getTime() - new Date(startDate).getTime()

  const minutes = (Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, '0');
  const seconds = (Math.floor((elapsedTime % (1000 * 60)) / 1000)).toString().padStart(2, '0');

  return [minutes, seconds];
};

export { useStaticElapsedTimer };
