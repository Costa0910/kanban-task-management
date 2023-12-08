import { useAppContext } from "../../../../../context/AppContext";
import Checkbox from "../../../../formElements/checkbox/Checkbox";
import Select from "../../../../formElements/select/Select";
import PropTypes from "prop-types";
import "./taskDetails.css";

const TaskDetails = ({ id, handleClick }) => {
  const { activeBoard } = useAppContext();
  const task = activeBoard.tasks.find((task) => task.id === id);
  const completed = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  return (
    <div className="task-details">
      <div className="task-details__title">
        <h2>{task.title}</h2>
        <span role="button" className="task__settings" onClick={handleClick}>
          <img src="./icon-vertical-ellipsis.svg" alt="task settings" />
        </span>
      </div>
      <p>{task.description}</p>
      <div className="task-details__subtasks">
        <p>
          Subtasks ({completed} of {task.subtasks.length})
        </p>
        {task.subtasks.map((subtask) => (
          <Checkbox
            key={subtask.id}
            customClass="subtask"
            handleClick={() => {
              console.log("subtask checked");
            }}
            checked={subtask.isCompleted}
          >
            {subtask.title}
          </Checkbox>
        ))}
      </div>
      <Select description="Current Status" options={activeBoard.columns} />
    </div>
  );
};

TaskDetails.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TaskDetails;
