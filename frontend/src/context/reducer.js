import { nanoid } from "nanoid";

export default (state, action) => {
  let helper;

  switch (action.type) {
    case "SET_BOARD":
      return {
        ...state,
        activeBoard: action.payload,
      };
    case "UPDATE_ACTIVE_BOARD":
      return {
        ...state,
        activeBoard: state.boards.find(
          (board) => board.id === action.payload.id
        ),
      };
    case "ADD_BOARD":
      helper = {
        id: nanoid(),
        name: action.payload.name,
        columns: action.payload.columns.map((column) => ({
          ...column,
          color: "#ebecf0",
        })),
        tasks: [],
      };
      return {
        ...state,
        boards: [...state.boards, helper],
      };
    default:
      return state;
  }
};
