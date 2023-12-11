import PropTypes from "prop-types";

import "./select.css";

const Select = ({ description, options, status, handleClick }) => {
  return (
    <div className="custom-select">
      <label htmlFor="status">{description}</label>
      <select
        id="status"
        name="currentStatus"
        onChange={handleClick}
        defaultValue={status}
      >
        {options.map((option) => (
          <option key={option.id} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
      <img src="./icon-chevron-down.svg" alt="arrow down" className="arrow" />
    </div>
  );
};

Select.propTypes = {
  description: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  status: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Select;
