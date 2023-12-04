import Task from "./task/Task";
import "./column.css";

const Column = () => {
  return (
    <div className="column">
      <div className="column__title">
        <span className="column__title-icon"></span>
        Todo<span>(4)</span>
      </div>
      <div className="column__content">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Column;
