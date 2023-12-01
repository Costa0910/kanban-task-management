const Boards = () => {
  return (
    <div className="nav-boards">
      <h3>Boards</h3>
      <div>
        <button className="board-button">Starred</button>
        <button className="board-button">All</button>
        <button className="board-button">Personal</button>
        <button className="add-board-button">+ Add New Board</button>
      </div>
    </div>
  );
};

export default Boards;
