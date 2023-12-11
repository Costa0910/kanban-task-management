import "./content.css";
import Column from "./column/Column";

import { useAppContext } from "../../context/AppContext";
const Content = () => {
  const { activeBoard } = useAppContext();
  return (
    <div className="content">
      {activeBoard.columns < 1 ? (
        <div className="add-column" role="button">
          <img src="./icon-add-column.svg" alt="add column" />
          <button>New column</button>
        </div>
      ) : (
        <>
          {activeBoard.columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
          {/* <div className="add-column" role="button">
            <img src="./icon-add-column.svg" alt="add column" />
            <button>New column</button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Content;
