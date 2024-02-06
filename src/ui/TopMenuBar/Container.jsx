import PropTypes from "prop-types";

function Container({ children }) {
  return (
    <div className='bg-gray-200 w-[80%] mx-auto rounded-2xl overflow-hidden '>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Container;
