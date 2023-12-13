import Input from "../../formElements/input/Input";
import InputAndDelete from "../../formElements/inputAndDelete/InputAndDelete";
import Button from "../../formElements/button/Button";
import PropTypes from "prop-types";
import { useReducer } from "react";
import { nanoid } from "nanoid";
import { generateColor } from "../../../utils/generateColor";

import "./addNewBoard.css";

const defaultState = {
  name: "",
  columns: [
    {
      title: "Todo",
      id: nanoid(),
      color: generateColor(),
    },
    {
      title: "Doing",
      id: nanoid(),
      color: generateColor(),
    },
    {
      title: "Done",
      id: nanoid(),
      color: generateColor(),
    },
  ],
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
    case "update":
      toUpdate = state.columns.findIndex((column) => column.id === id);
      return {
        ...state,
        columns: [
          ...state.columns.slice(0, toUpdate),
          { ...state.columns[toUpdate], title },
          ...state.columns.slice(toUpdate + 1),
        ],
      };
    case "delete":
      toUpdate = state.columns.findIndex((column) => column.id === id);
      return {
        ...state,
        columns: [
          ...state.columns.slice(0, toUpdate),
          ...state.columns.slice(toUpdate + 1),
        ],
      };

    case "add":
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            title: "",
            id: nanoid(),
            color: generateColor(),
          },
        ],
      };
    default:
      return state;
  }
};

const AddNewBoard = ({
  initialState = defaultState,
  handleSubmit,
  type,
  buttonText,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form
      className="add-new-board"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(state);
      }}
    >
      <h2>{type} Board</h2>
      <Input
        type="text"
        placeholder="e.g. Web Design"
        customClass="new-board-name"
        onChange={(e) =>
          dispatch({ type: "name", payload: { title: e.target.value } })
        }
        value={state.name}
      >
        Name
      </Input>
      <div className="board-columns">
        <label>Board Columns</label>
        {state.columns.map((column) => (
          <InputAndDelete
            id={column.id}
            key={column.id}
            placeholder="Add New Column"
            updateValue={dispatch}
            value={column.title}
          />
        ))}
        <Button
          type="button"
          customClass="add-column-button"
          handleClick={(e) => {
            e.preventDefault();
            dispatch({ type: "add", payload: {} });
          }}
        >
          + Add New Column
        </Button>
      </div>
      <Button
        type="submit"
        handleClick={(e) => {
          e.preventDefault();
          handleSubmit(state);
        }}
      >
        {buttonText}
      </Button>
    </form>
  );
};

AddNewBoard.propTypes = {
  initialState: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
  buttonText: PropTypes.string,
};

export default AddNewBoard;
