import "./task.css";
import PropTypes from "prop-types";
import TaskDetails from "./taskDetails/TaskDetails";
import Modal from "../../../modal/Modal";
import { useState } from "react";

const Task = ({ task }) => {
  const [showDetails, setShowDetails] = useState({
    show: false,
    settings: false,
  });
  const completed = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  return (
    <div
      className="task"
      role="button"
      onClick={() => setShowDetails((prev) => ({ ...prev, show: !prev.show }))}
    >
      <div className="task__title">{task.title}</div>
      <p className="subTasks">
        {completed} of {task.subtasks.length} subtasks
      </p>
      {showDetails.show && (
        // open modal for more details about task
        <Modal
          handleClose={(e) => {
            e.stopPropagation();
            setShowDetails((prev) => ({ ...prev, show: !prev.show }));
          }}
          classes="task-details-modal"
          isOpen={showDetails.show}
        >
          <TaskDetails
            id={task.id}
            handleClick={() =>
              setShowDetails((prev) => ({ ...prev, settings: !prev.settings }))
            }
          />
        </Modal>
      )}

      {
        // open modal for settings, edit task ou delete
        showDetails.settings && (
          <Modal
            handleClose={(e) => {
              e.stopPropagation();
              setShowDetails((prev) => ({ ...prev, settings: false }));
            }}
            isOpen={showDetails.settings}
            classes={"task-settings-modal"}
          >
            <button
              className="task-settings-modal__edit"
              onClick={() => console.log("edit")}
            >
              Edit Task
            </button>
            <button className="danger" onClick={() => console.log("delete")}>
              Delete Task
            </button>
          </Modal>
        )
      }
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
