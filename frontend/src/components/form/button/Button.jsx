import PropType from "prop-types";

import "./button.css";

const Button = ({ children, customClass, handleClick }) => {
  return (
    <button className={`button ${customClass} `} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropType.node.isRequired,
  customClass: PropType.string,
  handleClick: PropType.func.isRequired,
};

export default Button;
