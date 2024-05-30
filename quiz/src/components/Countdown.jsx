import { useMediaQuery } from '@mantine/hooks';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const UrgeWithPleasureComponent = (prop) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return ( 
    <CountdownCircleTimer
    isPlaying
    duration={prop.duration}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[20, 10, 5, 0]}
    size={isMobile?50:150}

  >{({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>

   );
}
 
export default UrgeWithPleasureComponent;