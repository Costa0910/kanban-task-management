import "./navbar.css";
import { useReducer } from "react";
import Modal from "../modal/Modal";
import AddNewTask from "../content/column/addNewTask/AddNewTask";
import Menu from "../menu/Menu";
import Button from "../formElements/button/Button";

import { useAppContext } from "../../context/AppContext";
import { useGetSize } from "../../hooks/getSize";

const reducer = (state, action) => {
  switch (action.type) {
    case "settings":
      return {
        addTask: false,
        menu: false,
        settings: !state.settings,
      };
    case "addTask":
      return {
        settings: false,
        menu: false,
        addTask: !state.addTask,
      };
    case "menu":
      return {
        settings: false,
        addTask: false,
        menu: !state.menu,
      };
    default:
      return state;
  }
};

const NavBar = () => {
  const isMobile = useGetSize();

  const [state, dispatch] = useReducer(reducer, {
    settings: false,
    addTask: false,
    menu: false,
  });

  const { activeBoard } = useAppContext();

  return (
    <div className="nav">
      <div className="nav__brand">
        <img src="./logo.svg" alt="kanban logo" />

        <div role="button" className="nav__board-name">
          <p>{activeBoard.name}</p>
          <span
            className="nav__board-name__chevron"
            role="button"
            onClick={() => dispatch({ type: "menu" })}
          >
            {state.menu ? (
              <img src="./icon-chevron-up.svg" alt="chevron up" />
            ) : (
              <img src="./icon-chevron-down.svg" alt="open menu" />
            )}
          </span>

          {state.menu && (
            <Modal
              handleClose={() => dispatch({ type: "menu" })}
              isOpen={state.menu}
              classes={"menu-modal"}
            >
              <Menu handleClose={() => dispatch({ type: "menu" })} />
            </Modal>
          )}
        </div>
      </div>

      <div className="nav__settings">
        <Button handleClick={() => dispatch({ type: "addTask" })}>
          {isMobile ? (
            <img src="./icon-add.svg" alt="add task" />
          ) : (
            "+ Add New Task"
          )}
        </Button>
        {state.addTask && (
          <Modal
            handleClose={() => dispatch({ type: "addTask" })}
            isOpen={state.addTask}
          >
            {/* <Menu /> */}
            <AddNewTask />
          </Modal>
        )}

        <button
          className="nav__settings-ellipse"
          onClick={() => dispatch({ type: "settings" })}
        >
          <img src="./icon-vertical-ellipsis.svg" alt=" vertical ellipsis" />
        </button>
        {state.settings && (
          <Modal
            handleClose={() => dispatch({ type: "settings" })}
            isOpen={state.settings}
            classes={"settings-modal"}
          >
            <button className="settings-edit">Edit Board</button>
            <button className="danger">Delete Board</button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default NavBar;
