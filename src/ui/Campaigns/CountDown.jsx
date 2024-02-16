import { useCountDown } from "../../hooks/useCountDown";
import PropTypes from 'prop-types'

function CountDown({ timer }) {
  const {formattedHours, formattedMinutes, formattedSeconds} = useCountDown(timer)
  return (
    <div className='bg-light-red text-white w-fit px-6 py-1 rounded-full mb-2'>
    <p className='font-thin'>Closing in</p>
    <h1 className='font-bold text-xl'> {formattedHours} {formattedMinutes} {formattedSeconds}</h1>
  </div>

  );
}

CountDown.propTypes = {
  timer: PropTypes.number.isRequired,
}

export default CountDown;
