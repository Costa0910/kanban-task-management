import Menu from "../menu/Menu";
import "./sidebar.css";
// import PropTypes from "prop-types";

// const Item = ({ name }) => {
//   return (
//     <div className="menu__item">
//       <span>
//         <img src="./icon-board.svg" alt="board icon" />
//       </span>
//       {name}
//     </div>
//   );
// };

// Item.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// const items = [
//   {
//     name: "Platform Launch",
//     id: 1,
//   },
//   {
//     name: "Marketing Plan",
//     id: 2,
//   },
//   {
//     name: "Roadmap",
//     id: 3,
//   },
// ];

// const Menu = () => {
//   return (
//     <div className="menu">
//       <div className="menu__count">
//         <p>{items.length}</p>
//       </div>
//       <div className="menu__item-container">
//         {items.map((item) => (
//           <Item key={item.id} name={item.name} />
//         ))}
//         <span>
//           <img src="./icon-add.svg" alt="add new board" />
//         </span>{" "}
//         Create new Board
//       </div>
//     </div>
//   );
// };

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="./sidebar-logo.svg" alt="kanban logo" />
      </div>
      <div className="sidebar__menu">
        <Menu />
      </div>
      <div className="sidebar__hide">
        <img src="./icon-hide-sidebar.svg" alt="hide sidebar" />
        <span>Hide Sidebar</span>
      </div>
    </div>
  );
};

export default SideBar;
