export default (state, action) => {
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
    default:
      return state;
  }
};
