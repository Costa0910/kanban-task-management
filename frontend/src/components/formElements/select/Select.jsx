import "./select.css";

const Select = () => {
  return (
    <div className="custom-select">
      <label htmlFor="status">Current Status</label>
      <select
        id="status"
        name="currentStatus"
        onChange={() => console.log("selected")}
      >
        <option value="">GitHub</option>
        <option value="">Instagram</option>
        <option value="">Facebook</option>
        <option value="">LinkedIn</option>
        <option value="">Twitter</option>
        <option value="">Reddit</option>
      </select>
      <img src="./icon-chevron-down.svg" alt="arrow down" className="arrow" />
    </div>
  );
};

export default Select;
