import "./content.css";

const Task = () => {
  return (
    <div className="task">
      <div className="task__title">Task Title</div>
      <p className="subTasks">0 of 3 subtasks</p>
    </div>
  );
};

const Column = () => {
  return (
    <div className="column">
      <div className="column__title">
        <span className="column__title-icon"></span>
        Todo<span>(4)</span>
      </div>
      <div className="column__content">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <Column />
      <Column />
      <Column />
      <div className="add-column" role="button">
        <img src="./icon-add-column.svg" alt="add column" />
        <button>New column</button>
      </div>
    </div>
  );
};

export default Content;
