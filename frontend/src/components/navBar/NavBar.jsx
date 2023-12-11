import "./navbar.css";
import { useReducer } from "react";
import Modal from "../modal/Modal";
import AddNewTask from "../content/column/addNewTask/AddNewTask";
import Menu from "../menu/Menu";
import Button from "../formElements/button/Button";
import AddNewBoard from "../board/addNewBoard/AddNewBoard";
import Confirm from "../confirm/Confirm";
import { useAppContext, useAppDispatch } from "../../context/AppContext";
import { useGetSize } from "../../hooks/getSize";
// import { nanoid } from "nanoid";

const reducer = (state, action) => {
  switch (action.type) {
    case "settings":
      return {
        ...state,
        menu: false,
        settings: !state.settings,
      };
    case "addTask":
      return {
        ...state,
        menu: false,
        addTask: !state.addTask,
      };
    case "menu":
      return {
        ...state,
        menu: !state.menu,
      };
    case "edit":
      return {
        ...state,
        settings: false,
        edit: !state.edit,
      };
    case "delete":
      return {
        ...state,
        settings: false,
        delete: !state.delete,
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
    edit: false,
    delete: false,
  });

  const { activeBoard } = useAppContext();
  const updateBoard = useAppDispatch();

  const handleEdit = (state) => {
    updateBoard({
      type: "EDIT_BOARD",
      payload: state,
    });
    dispatch({ type: "edit" });
  };

  const actualBoard = {
    name: activeBoard.name,
    columns: activeBoard.columns,
  };

  const handleNewTask = (state) => {
    updateBoard({
      type: "ADD_TASK",
      payload: state,
    });

    dispatch({ type: "addTask" });
  };

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
            <AddNewTask
              // handleClose={() => dispatch({ type: "addTask" })
              type="Add New"
              buttonText="Create Task"
              handleSubmit={handleNewTask}
            />
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
            <button
              className="settings-edit"
              onClick={() => dispatch({ type: "edit" })}
            >
              Edit Board
            </button>
            <button
              className="danger"
              onClick={() => dispatch({ type: "delete" })}
            >
              Delete Board
            </button>
          </Modal>
        )}
      </div>

      {state.edit && (
        <Modal
          handleClose={() => dispatch({ type: "edit" })}
          isOpen={state.edit}
        >
          <AddNewBoard
            initialState={actualBoard}
            handleSubmit={handleEdit}
            type={"Edit"}
            buttonText={"Save Changes"}
          />
        </Modal>
      )}
      {state.delete && (
        <Modal
          handleClose={() => dispatch({ type: "delete" })}
          isOpen={state.delete}
        >
          <Confirm
            cancel={() => {
              dispatch({ type: "delete", payload: {} });
            }}
            confirm={() => dispatch({ type: "delete", payload: {} })}
            message={`
              Are you sure you want to delete the '${activeBoard.name}' board? This action will remove all columns and tasks and cannot be reversed.`}
            type={"board"}
          />
        </Modal>
      )}
    </div>
  );
};

export default NavBar;
