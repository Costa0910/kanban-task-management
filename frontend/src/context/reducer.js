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
        activeBoard: helper,
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
    case "DELETE_BOARD":
      helper = state.boards.findIndex(
        (board) => board.id === state.activeBoard.id
      );
      return {
        ...state,
        boards: state.boards.filter(
          (board) => board.id !== state.activeBoard.id
        ),
        activeBoard: state.boards[helper + 1] ||
          state.boards[helper - 1] || {
            name: "",
            columns: [],
            tasks: [],
          },
      };

    case "DELETE_TASK":
      helper = state.activeBoard.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        activeBoard: {
          ...state.activeBoard,
          tasks: helper,
        },
        boards: state.boards.map((board) =>
          board.id === state.activeBoard.id
            ? {
                ...board,
                tasks: helper,
              }
            : board
        ),
      };
    case "UPDATE_TASK_STATUS":
      helper = state.activeBoard.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task
      );

      return {
        ...state,
        activeBoard: {
          ...state.activeBoard,
          tasks: helper,
        },
        boards: state.boards.map((board) =>
          board.id === state.activeBoard.id
            ? {
                ...board,
                tasks: helper,
              }
            : board
        ),
      };
    case "UPDATE_SUBTASK":
      helper = state.activeBoard.tasks.map((task) =>
        task.id === action.payload.taskId
          ? {
              ...task,
              subtasks: task.subtasks.map((subtask) =>
                subtask.id === action.payload.subtaskId
                  ? { ...subtask, isCompleted: !subtask.isCompleted }
                  : subtask
              ),
            }
          : task
      );

      return {
        ...state,
        activeBoard: {
          ...state.activeBoard,
          tasks: helper,
        },
        boards: state.boards.map((board) =>
          board.id === state.activeBoard.id
            ? {
                ...board,
                tasks: helper,
              }
            : board
        ),
      };
    default:
      return state;
  }
};
