// import Modal from "../../modal/Modal";
import Input from "../../../formElements/input/Input";
// import InputAndDelete from "../../../formElements/inputAndDelete/InputAndDelete";
import Button from "../../../formElements/button/Button";
// import { nanoid } from "nanoid";
import Select from "../../../formElements/select/Select";
import "./addNewTask.css";

const AddNewTask = () => {
  return (
    <form
      className="add-new-task"
      onSubmit={(e) => {
        e.preventDefault();
        // console.log(state);
      }}
    >
      <h2>Add New Task</h2>
      <Input
        type="text"
        placeholder="e.g. Take coffee break"
        customClass="new-task-name"
        onChange={(e) =>
          // dispatch({ type: "name", payload: { title: e.target.value } })
          console.log(e.target.value)
        }
        // value={state.name}
      >
        Title
      </Input>
      <div className="task-description">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="8"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge you batteries a little."
        ></textarea>
      </div>
      <div className="task-columns">
        <label>Subtasks</label>
        {/* {state.columns.map((column) => (
          <InputAndDelete
            id={column.id}
            key={column.id}
            placeholder="Add New Column"
            updateValue={dispatch}
            value={column.title}
          />
        ))} */}
        <Button
          type="button"
          customClass="add-subtasks-button"
          handleClick={() => {
            // dispatch({ type: "add", payload: {} });1
          }}
        >
          + Add New Subtask
        </Button>
      </div>
      <Select
        description="Status"
        name="task-status"
        id="task-status"
        // options={[
        //   {
        //     value: "todo",
        //     label: "To Do",
        //   },
        //   {
        //     value: "in-progress",
        //     label: "In Progress",
        //   },
        //   {
        //     value: "done",
        //     label: "Done",
        //   },
        // ]}
      />
      <Button type="submit" onClick={(e) => e.preventDefault()}>
        Create New Board
      </Button>
    </form>
  );
};

export default AddNewTask;
