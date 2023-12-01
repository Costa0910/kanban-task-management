import "./content.css";

const Task = () => {
  return (
    <div className="task">
      <div className="task__title">Task Title</div>
      <p>0 of 3 subtasks</p>
    </div>
  );
};

const Column = () => {
  return (
    <div className="column">
      <div className="column__title">Column</div>
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
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export default Content;
