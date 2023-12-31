import Task from "./task/Task";
import "./column.css";

import { useAppContext } from "../../../context/AppContext";
import PropTypes from "prop-types";

const Column = ({ column }) => {
  const { activeBoard } = useAppContext();
  const tasks = activeBoard.tasks.filter(
    (task) => task.status === column.title
  );
  return (
    <div className="column">
      <div className="column__title">
        <span
          className="column__title-icon"
          style={{ backgroundColor: column.color }}
        ></span>
        {column.title}
        <span>({tasks.length})</span>
      </div>
      <div className="column__content">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

Column.propTypes = {
  column: PropTypes.object.isRequired,
};

export default Column;
