import PropTypes from 'prop-types';

function LiveDrawItem({ item }) {
  const { day, year, time } = formatDateParts(item.date);
  return (
    <div className='relative'>
      <img
        src={`/asset/images/Live/${item.img}`}
        alt=''
        className='h-[12rem] w-[12rem] md:w-[14rem] md:h-[15rem] object-cover rounded-2xl'
      />
      <div className='text-xs text-white font-semibold ml-3 absolute bottom-3'>
        <p>{day}</p>
        <p>{year}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}

// Function to add ordinal suffix to a number
function addOrdinalSuffix(n) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

// Function to format date parts
function formatDateParts(dateString) {
  const date = new Date(dateString);

  const dayWithOrdinal = addOrdinalSuffix(date.getDate());
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return {
    day: `${dayWithOrdinal} ${month}`,
    year: `${year}`,
    time: `${time}`
  };
}

LiveDrawItem.propTypes = {
  item: PropTypes.object
}
export default LiveDrawItem;
