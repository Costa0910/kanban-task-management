import "./content.css";
import Column from "./column/Column";
import Select from "../formElements/select/Select";
const Content = () => {
  return (
    <div className="content">
      <Column />
      <Column />
      <Column />
      <Select />
      <div className="add-column" role="button">
        <img src="./icon-add-column.svg" alt="add column" />
        <button>New column</button>
      </div>
    </div>
  );
};

export default Content;
