import { NavLink as BrowserNavLink } from "react-router-dom";
import PropTypes from "prop-types";

function NavLink({ children, to }) {
  return (
    <BrowserNavLink
      to={to}
      className='border shadow-lg relative mb-2 rounded-full bg-white flex flex-col items-center w-[4rem] h-[4rem] justify-center'
    >
      {children}
    </BrowserNavLink>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
  to: "/",
};

export default NavLink;
