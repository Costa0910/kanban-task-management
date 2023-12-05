import PropTypes from "prop-types";
import "./input.css";

const Input = ({
  type,
  name,
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
        name={name}
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
