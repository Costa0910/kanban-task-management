import DarkModeToggle from "../darkMode/DarkModeToggle";
import Modal from "../modal/Modal";
import AddNewBoard from "../board/addNewBoard/AddNewBoard";
import PropTypes from "prop-types";
import { useState } from "react";

import "./menu.css";
import { useAppContext } from "../../context/AppContext";

const Item = ({ name, customClass }) => {
  return (
    <div className={`menu__item ${customClass}`}>
      <span>
        <img src="./icon-board.svg" alt="board icon" />
      </span>
      {name}
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

const Menu = ({ handleClose }) => {
  const [state, setState] = useState(false);
  const { boards, activeBoard } = useAppContext();
  const handleClick = () => {
    setState((prev) => !prev);

    if (state) {
      handleClose();
    }
  };
  return (
    <div className="menu">
      <div className="menu__count">
        <p>All Boards ({boards.length})</p>
      </div>
      <div className="menu__item-container">
        {boards.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            customClass={item.id === activeBoard.id ? "active" : ""}
          />
        ))}
        <div className="menu__item-add">
          <span>
            <img src="./icon-new-board.svg" alt="board icon" className="add" />
          </span>
          <button className="menu__item-add-text" onClick={handleClick}>
            <img
              src="./icon-add-board.svg"
              alt="add new board"
              className="add"
            />
            Create new Board
          </button>
          {state && (
            <Modal handleClose={() => setState(false)} isOpen={state}>
              <AddNewBoard />
            </Modal>
          )}
        </div>
      </div>
      <DarkModeToggle />
    </div>
  );
};

Menu.propTypes = {
  handleClose: PropTypes.func,
};

export default Menu;
