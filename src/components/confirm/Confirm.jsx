import PropTypes from "prop-types";
import Button from "../formElements/button/Button";

import "./confirm.css";
const Confirm = ({ type, message, cancel, confirm }) => {
  // const handleCancel = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   cancel();
  // };
  return (
    <div className="confirm">
      <h2>Delete this {type}?</h2>
      <p>{message}</p>
      <div className="confirm__buttons">
        <Button handleClick={confirm} customClass="confirm__buttons-danger">
          Delete
        </Button>

        <Button handleClick={cancel} customClass="confirm__buttons-cancel">
          Cancel
        </Button>
      </div>
    </div>
  );
};

Confirm.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  cancel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
};

export default Confirm;
