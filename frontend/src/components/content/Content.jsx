import "./content.css";
import Column from "./column/Column";

const Content = () => {
  return (
    <div className="content">
      <Column />
      <Column />
      <Column />
      <div className="add-column" role="button">
        <img src="./icon-add-column.svg" alt="add column" />
        <button>New column</button>
      </div>
    </div>
  );
};

export default Content;
