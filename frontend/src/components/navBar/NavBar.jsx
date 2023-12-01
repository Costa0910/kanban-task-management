import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__brand">
        <img src="./logo.svg" alt="kanban logo" />
        <div role="button" className="nav__board-name">
          <p>Platform Launch</p>
          <span className="nav__board-name__chevron">
            <img src="./icon-chevron-down.svg" alt="open menu" />
          </span>
        </div>
      </div>
      <div className="nav__settings">
        <button>
          <img src="./icon-add-task-mobile.svg" alt="add task" />
        </button>
        <div className="nav__settings-ellipse">
          <img src="./icon-vertical-ellipsis.svg" alt=" vertical ellipsis" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
