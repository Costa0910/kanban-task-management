import PropTypes from "prop-types";
import "./inputAndDelete.css";

const InputAndDelete = ({ value, updateValue, placeholder, id }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target);
    if (e.target.name === "title") {
      updateValue({ type: "column", payload: { title: e.target.value, id } });
    } else {
      console.log(id);
      updateValue({ type: "delete", payload: { id } });
    }
  };
  return (
    <div className="input-and-delete">
      <input
        name="title"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleClick}
      />
      <img src="./icon-cross.svg" alt="delete" onClick={handleClick} />
    </div>
  );
};

InputAndDelete.propTypes = {
  value: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default InputAndDelete;
