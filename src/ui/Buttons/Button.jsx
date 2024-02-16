import PropTypes from "prop-types";

/**
 * Button Component
 *
 * @component
 * @param {Object} props - The properties of the Button component.
 * @param {string|ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} [props.type=""] - Specifies the visual style of the button.
 *                                    Possible values: "primary", "secondary", "dark", "light".
 * @param {string} [props.className="100%"] - additional classNames for the component
 * @returns {ReactElement} The rendered Button component.
 *
 * @example
 * // Creating a primary button with width "100%".:
 * <Button  type="primary" width='w-full'>Click me</Button>
 *
 * @example
 * // Creating a secondary button:
 * <Button  type="secondary">Click me</Button>
 *
 * @example
 * // Creating a dark-themed button:
 * <Button  type="dark">Click me</Button>
 *
 * @example
 * // Creating a light-themed button:
 * <Button  type="light">Click me</Button>
 */

function Button({ children, type = "", className = "", btnType = 'button' }) {
  switch (type) {
    case "primary":
      return (
        <button type={btnType}
          className={`bg-gradient-to-b from-purple-500 to-purple-800 text-white rounded-2xl py-4 md:py-4 mt-4 font-bold hover:from-purple-400 hover:to-purple-700 ${className} `}
        >
          {children}
        </button>
      );
    case "dark":
      return (
        <button type={btnType}
          className={`bg-gradient-to-b from-gray-500 to-gray-800 text-white rounded-2xl py-4 md:py-4 mt-4 font-bold hover:from-gray-400 hover:to-gray-700`}
        >
          {children}
        </button>
      );
    case "light":
      return (
        <button type={btnType}
          className={`bg-gradient-to-b from-gray-50 to-gray-100 border  rounded-2xl py-4 px-6 md:py-4 mt-4 font-normal hover:from-gray-100 hover:to-gray-200 text-black ${className}`}
        >
          {children}
        </button>
      );
    default:
      <button type={btnType} className='bg-gradient-to-b from-stone-500 to-stone-800 rounded-2xl py-4 md:py-4 mt-4 font-bold hover:from-violet-400 hover:to-violet-700 w-full'>
        {children}
      </button>;
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  btnType: PropTypes.string,
};
export default Button;
