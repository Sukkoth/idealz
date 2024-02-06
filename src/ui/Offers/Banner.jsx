import PropTypes from "prop-types";
function Banner({ button, header, title, content, gradient }) {
  return (
    <div
      className={`rounded-[2rem] bg-gradient-to-r ${gradient} p-7 text-white min-h-[17rem] }`}
    >
      <div>
        <h3 className='font-thin'>{header}</h3>
        <div className='mt-10'>
          <h1 className='text-3xl uppercase  text-rowdies font-extrabold'>
            {title}
          </h1>
          <p className='font-thin'>{content}</p>
          {button && button}
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  button: PropTypes.element,
  header: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  gradient: PropTypes.string,
};

export default Banner;
