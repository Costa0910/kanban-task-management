import "./task.css";
import PropTypes from "prop-types";
import TaskDetails from "./taskDetails/TaskDetails";
import Modal from "../../../modal/Modal";
import { useState } from "react";

const Task = ({ task }) => {
  const [showDetails, setShowDetails] = useState(false);
  const completed = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  return (
    <div className="task" role="button" onClick={() => setShowDetails(true)}>
      <div className="task__title">{task.title}</div>
      <p className="subTasks">
        {completed} of {task.subtasks.length} subtasks
      </p>
      {showDetails && (
        <Modal
          handleClose={(e) => {
            e.stopPropagation();
            setShowDetails(false);
          }}
          classes="task-details-modal"
          isOpen={showDetails}
        >
          <TaskDetails id={task.id} />
        </Modal>
      )}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
