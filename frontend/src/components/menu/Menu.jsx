import DarkModeToggle from "../darkMode/DarkModeToggle";
import Modal from "../modal/Modal";
import PropTypes from "prop-types";
import { useState } from "react";

import "./menu.css";

const Item = ({ name }) => {
  return (
    <div className="menu__item">
      <span>
        <img src="./icon-board.svg" alt="board icon" />
      </span>
      {name}
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
};

const items = [
  {
    name: "Platform Launch",
    id: 1,
  },
  {
    name: "Marketing Plan",
    id: 2,
  },
  {
    name: "Roadmap",
    id: 3,
  },
];

const Menu = ({ handleClose }) => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prev) => !prev);

    if (state) {
      handleClose();
    }
  };
  console.log("out:", state);
  return (
    <div className="menu">
      <div className="menu__count">
        <p>All Boards ({items.length})</p>
      </div>
      <div className="menu__item-container">
        {items.map((item) => (
          <Item key={item.id} name={item.name} />
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
              <p>Create new Board</p>
              <p>Create new Board</p>
              <p>Create new Board</p>
              <p>Create new Board</p>
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
