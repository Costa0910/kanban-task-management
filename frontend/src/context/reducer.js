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
    case "ADD_TASK":
      helper = {
        id: nanoid(),
        ...action.payload,
      };
      return {
        ...state,
        activeBoard: {
          ...state.activeBoard,
          tasks: [...state.activeBoard.tasks, helper],
        },
        boards: state.boards.map((board) =>
          board.id === state.activeBoard.id
            ? { ...board, tasks: [...board.tasks, helper] }
            : board
        ),
      };

    case "EDIT_BOARD":
      return {
        ...state,
        activeBoard: {
          ...state.activeBoard,
          name: action.payload.name,
          columns: action.payload.columns,
        },
        boards: state.boards.map((board) =>
          board.id === state.activeBoard.id
            ? {
                ...board,
                name: action.payload.name,
                columns: action.payload.columns,
              }
            : board
        ),
      };
    case "UPDATE_TASK":
      helper = {
        ...state.activeBoard.tasks.find(
          (task) => task.id === action.payload.id
        ),
        ...action.payload,
      };

      return {
        ...state,
        activeBoard: {
          ...state.activeBoard,
          tasks: state.activeBoard.tasks.map((task) =>
            task.id === action.payload.id ? helper : task
          ),
        },
        boards: state.boards.map((board) =>
          board.id === state.activeBoard.id
            ? {
                ...board,
                tasks: board.tasks.map((task) =>
                  task.id === action.payload.id ? helper : task
                ),
              }
            : board
        ),
      };

    default:
      return state;
  }
};
