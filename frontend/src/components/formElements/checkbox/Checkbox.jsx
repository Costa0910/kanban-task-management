import "./checkbox.css";
import PropTypes from "prop-types";

const Checkbox = ({ children, customClass, handleClick }) => {
  return (
    <label className={`input__checkbox ${customClass}`}>
      <input
        type="checkbox"
        className="checkbox"
        aria-label="Checkbox"
        onClick={handleClick}
      />
      {children}
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  customClass: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Checkbox;
