import PropType from "prop-types";

function TopMenuButton({ name, children, active, handleClick }) {
  return (
    <button
      className={`w-1/2 p-2 rounded-2xl font-normal ${
        active ? "bg-white" : ""
      }`}
      onClick={() => handleClick(name)}
    >
      {children}
    </button>
  );
}

TopMenuButton.propTypes = {
  children: PropType.string,
  active: PropType.bool,
  handleClick: PropType.func,
  name: PropType.string,
};

export default TopMenuButton;
