import PropTypes from "prop-types";
import "./input.css";

const Input = ({
  type,
  placeholder,
  customClass,
  value,
  onChange,
  children,
}) => {
  return (
    <label className={`label ${customClass}`}>
      {children}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Input;
