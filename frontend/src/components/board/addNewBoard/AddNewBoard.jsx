import Input from "../../formElements/input/Input";
import InputAndDelete from "../../formElements/inputAndDelete/InputAndDelete";
import Button from "../../formElements/button/Button";
import PropTypes from "prop-types";
// import { useAppDispatch } from "../../../context/AppContext";
import { useReducer } from "react";
import { nanoid } from "nanoid";

import "./addNewBoard.css";

const defaultState = {
  name: "",
  columns: [
    {
      title: "Todo",
      id: nanoid(),
      color: "#ebecf0",
    },
    {
      title: "Doing",
      id: nanoid(),
      color: "#ebecf0",
    },
    {
      title: "Done",
      id: nanoid(),
      color: "#ebecf0",
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
            color: "#ebecf0",
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
  // const addNewBoard = useAppDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const newBoard = {
  //   //   id: nanoid(),
  //   //   name: state.name,
  //   //   columns: state.columns.map((column) => ({
  //   //     ...state.columns,
  //   //     color: "#ebecf0",
  //   //   })),
  //   //   tasks: [],
  //   // };

  //   addNewBoard({
  //     type: "ADD_BOARD",
  //     payload: state,
  //   });

  //   // close the modal
  //   handleClose();
  // };

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
