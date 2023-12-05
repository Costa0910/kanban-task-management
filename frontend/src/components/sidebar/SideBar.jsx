import Menu from "../menu/Menu";
import Input from "../formElements/input/Input";
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
      <Input
        type="text"
        name="search"
        placeholder="Search"
        customClass="sidebar__search"
        onChange={() => {}}
        value=""
      >
        Name
      </Input>
      <div className="sidebar__hide">
        <img src="./icon-hide-sidebar.svg" alt="hide sidebar" />
        <span>Hide Sidebar</span>
      </div>
    </div>
  );
};

export default SideBar;
