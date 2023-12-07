import PropTypes from "prop-types";

import "./select.css";

const Select = ({ description, options }) => {
  return (
    <div className="custom-select">
      <label htmlFor="status">{description}</label>
      <select
        id="status"
        name="currentStatus"
        onChange={() => console.log("selected")}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
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
};

export default Select;
