import { useElapsedTimer } from '../../hooks/useElapsedTimer';
import { YellowIndicator, RedIndicator } from './Indicators';

const ElapsedTime = ({ input }) => {
  const [minutes, seconds] = useElapsedTimer(input);

  return (
    <div className='flex items-center justify-between w-full'>
      <div>
        {minutes} : {seconds}
      </div>
      <div>
        {+minutes >= 20 ? (
          <RedIndicator />
        ) : +minutes >= 15 ? (
          <YellowIndicator />
        ) : null}
      </div>
    </div>
  );
};

export default ElapsedTime;
