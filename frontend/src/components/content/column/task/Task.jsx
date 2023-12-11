import "./task.css";
import PropTypes from "prop-types";
import TaskDetails from "./taskDetails/TaskDetails";
import AddNewTask from "../addNewTask/AddNewTask";
import Modal from "../../../modal/Modal";
import { useAppDispatch } from "../../../../context/AppContext";
import { useState } from "react";

const Task = ({ task }) => {
  const updateTask = useAppDispatch();

  const [showDetails, setShowDetails] = useState({
    show: false,
    settings: false,
    edit: false,
    delete: false,
  });

  const completed = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  const handleUpdateTask = (task) => {
    updateTask({
      type: "UPDATE_TASK",
      payload: task,
    });
    setShowDetails((prev) => ({ ...prev, edit: false }));
  };

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
        // open modal for settings, edit task and delete
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
              onClick={() =>
                setShowDetails((prev) => ({
                  ...prev,
                  edit: true,
                  show: false,
                }))
              }
            >
              Edit Task
            </button>
            <button
              className="danger"
              onClick={() =>
                setShowDetails((prev) => ({
                  ...prev,
                  delete: true,
                  show: false,
                }))
              }
            >
              Delete Task
            </button>
          </Modal>
        )
      }
      {
        // open modal for edit task
        showDetails.edit && (
          <Modal
            handleClose={(e) => {
              e.stopPropagation();
              setShowDetails((prev) => ({ ...prev, edit: false }));
            }}
            isOpen={showDetails.edit}
            classes={"edit-task-modal"}
          >
            <AddNewTask
              initialState={task}
              handleSubmit={handleUpdateTask}
              type="Edit"
              buttonText="Save Changes"
            />
          </Modal>
        )
      }
      {
        // open modal for delete task showDetails.delete && (
        <Modal
          handleClose={(e) => {
            e.stopPropagation();
            setShowDetails((prev) => ({ ...prev, delete: false }));
          }}
          isOpen={showDetails.delete}
          classes={"delete-task-modal"}
        >
          {/* Add your delete task form here */}
        </Modal>
      }
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
