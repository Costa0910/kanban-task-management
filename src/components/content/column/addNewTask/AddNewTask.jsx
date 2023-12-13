import { useReducer } from "react";
import { nanoid } from "nanoid";
import Input from "../../../formElements/input/Input";
import InputAndDelete from "../../../formElements/inputAndDelete/InputAndDelete";
import Button from "../../../formElements/button/Button";
import PropTypes from "prop-types";
import Select from "../../../formElements/select/Select";
import "./addNewTask.css";

import { useAppContext } from "../../../../context/AppContext";

const defaultState = {
  title: "",
  description: "",
  status: "",
  subtasks: [],
};

const reducer = (state, action) => {
  let toUpdate;
  const { title, id, description } = action.payload;

  switch (action.type) {
    case "name":
      return {
        ...state,
        title,
      };
    case "description":
      return {
        ...state,
        description,
      };
    case "status":
      return {
        ...state,
        status: title,
      };
    case "update":
      toUpdate = state.subtasks.findIndex((subTask) => subTask.id === id);
      return {
        ...state,
        subtasks: [
          ...state.subtasks.slice(0, toUpdate),
          { ...state.subtasks[toUpdate], title },
          ...state.subtasks.slice(toUpdate + 1),
        ],
      };
    case "delete":
      toUpdate = state.subtasks.filter((subTask) => subTask.id != id);
      return {
        ...state,
        subtasks: toUpdate,
      };

    case "add":
      return {
        ...state,
        subtasks: [
          ...state.subtasks,
          {
            title: "",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      };
    default:
      return state;
  }
};

const AddNewTask = ({
  handleSubmit,
  initialState = defaultState,
  type,
  buttonText,
}) => {
  // const addTask = useAppDispatch();
  const { activeBoard } = useAppContext();

  // if there is no status in the initial state set it to the first column
  initialState.status = initialState.status || activeBoard.columns[0].title;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form
      className="add-new-task"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(state);
      }}
    >
      <h2>{type} Task</h2>
      <Input
        type="text"
        value={state.title}
        placeholder="e.g. Take coffee break"
        customClass="new-task-name"
        onChange={(e) =>
          dispatch({ type: "name", payload: { title: e.target.value } })
        }
      >
        Title
      </Input>
      <div className="task-description">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={(e) =>
            dispatch({
              type: "description",
              payload: { description: e.target.value },
            })
          }
          value={state.description}
          name="description"
          id="description"
          cols="30"
          rows="8"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge you batteries a little."
        />
      </div>
      <div className="task-columns">
        <label>Subtasks</label>
        {state.subtasks.map((subTask) => (
          <InputAndDelete
            id={subTask.id}
            key={subTask.id}
            placeholder="Add New Column"
            updateValue={dispatch}
            value={subTask.title}
          />
        ))}
        <Button
          type="button"
          customClass="add-subtasks-button"
          handleClick={(e) => {
            e.preventDefault();
            dispatch({ type: "add", payload: {} });
          }}
        >
          + Add New Subtask
        </Button>
      </div>
      <Select
        description="Status"
        name="task-status"
        id="task-status"
        handleClick={(e) =>
          dispatch({ type: "status", payload: { title: e.target.value } })
        }
        status={state.status}
        options={activeBoard.columns}
      />
      <Button type="submit" handleClick={() => console.log("form submitted")}>
        {buttonText}
      </Button>
    </form>
  );
};

AddNewTask.propTypes = {
  initialState: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
  buttonText: PropTypes.string,
};

export default AddNewTask;
