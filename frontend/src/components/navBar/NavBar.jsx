import "./navbar.css";
import { useState } from "react";
import Modal from "../modal/Modal";
import Menu from "../menu/Menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <div className="nav__brand">
        <img src="./logo.svg" alt="kanban logo" />
        <div role="button" className="nav__board-name">
          <p>Platform Launch</p>
          <span
            className="nav__board-name__chevron"
            role="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src="./icon-chevron-up.svg" alt="chevron up" />
            ) : (
              <img src="./icon-chevron-down.svg" alt="open menu" />
            )}
          </span>
          {isOpen && (
            <Modal
              handleClose={() => setIsOpen(false)}
              isOpen={isOpen}
              classes={"menu-modal"}
            >
              <Menu />
            </Modal>
          )}
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
