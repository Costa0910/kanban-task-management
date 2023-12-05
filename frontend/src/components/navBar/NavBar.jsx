import "./navbar.css";
import { useReducer } from "react";
import Modal from "../modal/Modal";
import Menu from "../menu/Menu";
import Button from "../formElements/button/Button";

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
  const [state, dispatch] = useReducer(reducer, {
    settings: false,
    addTask: false,
    menu: false,
  });

  return (
    <div className="nav">
      <div className="nav__brand">
        <img src="./logo.svg" alt="kanban logo" />

        <div role="button" className="nav__board-name">
          <p>Platform Launch</p>
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
        <Button handleClick={() => dispatch({ type: "addTask" })}>+</Button>
        {state.addTask && (
          <Modal
            handleClose={() => dispatch({ type: "addTask" })}
            isOpen={state.addTask}
          >
            <Menu />
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
          >
            <Menu />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default NavBar;
