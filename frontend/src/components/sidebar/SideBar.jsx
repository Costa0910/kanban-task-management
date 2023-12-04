import Menu from "../menu/Menu";
import Checkbox from "../formElements/checkbox/Checkbox";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="./sidebar-logo.svg" alt="kanban logo" />
      </div>
      <div className="sidebar__menu">
        <Menu />
      </div>
      <Checkbox handleClick={() => console.log("clicked")}>
        Testing this stuff
      </Checkbox>
      <div className="sidebar__hide">
        <img src="./icon-hide-sidebar.svg" alt="hide sidebar" />
        <span>Hide Sidebar</span>
      </div>
    </div>
  );
};

export default SideBar;
