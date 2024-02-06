import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function MenuItem({ icon, title, to }) {
  const navigate = useNavigate();
  return (
    <div
      className='px-2 py-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer'
      onClick={() => navigate(to)}
    >
      <div className='flex gap-3 items-center'>
        <div className='text-2xl'>{icon}</div>
        <p className='text-xs md:text-sm'>{title}</p>
      </div>
      <div className='text-gray-400'>
        <FaChevronRight />
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default MenuItem;
