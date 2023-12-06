import "./task.css";
import PropTypes from "prop-types";

const Task = ({ task }) => {
  const completed = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  return (
    <div className="task">
      <div className="task__title">{task.title}</div>
      <p className="subTasks">
        {completed} of {task.subtasks.length} subtasks
      </p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
