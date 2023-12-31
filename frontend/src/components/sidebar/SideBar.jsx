import Menu from "../menu/Menu";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="./logo.svg" alt="kanban logo" />
        <span>Kanban</span>
      </div>
      <div className="sidebar__menu">
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
