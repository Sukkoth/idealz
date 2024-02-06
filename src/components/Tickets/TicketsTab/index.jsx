import { IoTicketOutline } from "react-icons/io5";
import PropTypes from "prop-types";

function TicketsTab({ ticketCount = 0 }) {
  return ticketCount === 0 ? (
    <div className='h-[100%] flex justify-center items-center flex-col gap-5'>
      <div className='bg-white rounded-full p-4'>
        <IoTicketOutline size={70} />
      </div>
      <p className='text-sm text-center'>
        You can see your active tickets here after you have made a purchase
      </p>
    </div>
  ) : (
    <div></div>
  );
}

TicketsTab.propTypes = {
  ticketCount: PropTypes.number,
};

export default TicketsTab;
