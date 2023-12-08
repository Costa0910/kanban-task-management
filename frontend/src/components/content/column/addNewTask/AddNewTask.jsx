import { useReducer } from "react";
// import Modal from "../../modal/Modal";
import { nanoid } from "nanoid";
import Input from "../../../formElements/input/Input";
import InputAndDelete from "../../../formElements/inputAndDelete/InputAndDelete";
import Button from "../../../formElements/button/Button";
// import { nanoid } from "nanoid";
import Select from "../../../formElements/select/Select";
import "./addNewTask.css";

const initialState = {
  name: "",
  description: "",
  subTasks: [],
};

const reducer = (state, action) => {
  let toUpdate;
  const { title, id } = action.payload;

  switch (action.type) {
    case "name":
      return {
        ...state,
        name: title,
      };
    case "description":
      return {
        ...state,
        description: title,
      };
    case "update":
      toUpdate = state.subTasks.findIndex((subTask) => subTask.id === id);
      return {
        ...state,
        subTasks: [
          ...state.subTasks.slice(0, toUpdate),
          { ...state.subTasks[toUpdate], title },
          ...state.subTasks.slice(toUpdate + 1),
        ],
      };
    case "delete":
      toUpdate = state.subTasks.filter((subTask) => subTask.id != id);
      return {
        ...state,
        subTasks: toUpdate,
      };

    case "add":
      return {
        ...state,
        subTasks: [
          ...state.subTasks,
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

const AddNewTask = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form
      className="add-new-task"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("form submitted");
      }}
    >
      <h2>Add New Task</h2>
      <Input
        type="text"
        value={state.name}
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
        ></textarea>
      </div>
      <div className="task-columns">
        <label>Subtasks</label>
        {state.subTasks.map((subTask) => (
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
            e.stopPropagation();
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
        options={["Todo", "In Progress", "Done"]}
      />
      <Button type="submit" handleClick={() => console.log("form submitted")}>
        Create New Board
      </Button>
    </form>
  );
};

export default AddNewTask;
