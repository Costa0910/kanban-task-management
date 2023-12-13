import {
  useAppContext,
  useAppDispatch,
} from "../../../../../context/AppContext";
import Checkbox from "../../../../formElements/checkbox/Checkbox";
import Select from "../../../../formElements/select/Select";
import PropTypes from "prop-types";
import "./taskDetails.css";

const TaskDetails = ({ id, handleClick }) => {
  const { activeBoard } = useAppContext();
  const dispatch = useAppDispatch();

  const task = activeBoard.tasks.find((task) => task.id === id);
  const completed = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  const changeStatus = (status) => {
    dispatch({
      type: "UPDATE_TASK_STATUS",
      payload: {
        id,
        status,
      },
    });
  };

  const updateSubtask = (subtaskId) => {
    dispatch({
      type: "UPDATE_SUBTASK",
      payload: {
        taskId: id,
        subtaskId,
      },
    });
  };
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
            handleClick={() => updateSubtask(subtask.id)}
            checked={subtask.isCompleted}
          >
            {subtask.title}
          </Checkbox>
        ))}
      </div>
      <Select
        description="Current Status"
        options={activeBoard.columns}
        status={task.status}
        handleClick={changeStatus}
      />
    </div>
  );
};

TaskDetails.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TaskDetails;
