import "./checkbox.css";
import PropTypes from "prop-types";

const Checkbox = ({ children, customClass, handleClick, checked }) => {
  return (
    <label className={`input__checkbox ${customClass}`}>
      <input
        type="checkbox"
        className="checkbox"
        aria-label="Checkbox"
        onChange={handleClick}
        checked={checked}
      />
      {children}
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  customClass: PropTypes.string,
  handleClick: PropTypes.func,
  checked: PropTypes.bool,
};

export default Checkbox;
