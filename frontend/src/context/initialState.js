import { nanoid } from "nanoid";

export default {
  activeBoard: {
    name: "Platform Lanche",
    id: nanoid(),
    columns: ["Todo", "Doing", "Done"],
    tasks: [
      {
        title: "Learn React",
        id: nanoid(),
        description: "Learn React with React, Redux Toolkit and Redux Saga",
        status: "Todo",
        subtasks: [
          {
            title: "Learn React",
            id: nanoid(),
            isCompleted: false,
          },
          {
            title: "Learn Redux",
            id: nanoid(),
            isCompleted: false,
          },
          {
            title: "Learn React Router",
            id: nanoid(),
            isCompleted: true,
          },
        ],
      },
      {
        title: "Learn Redux",
        id: nanoid(),
        description: "Learn Redux with React, Redux Toolkit and Redux Saga",
        status: "Doing",
        subtasks: [
          {
            title: "Learn React",
            id: nanoid(),
            isCompleted: false,
          },
          {
            title: "Learn Redux",
            id: nanoid(),
            isCompleted: false,
          },
          {
            title: "Learn React Router",
            id: nanoid(),
            isCompleted: true,
          },
        ],
      },
    ],
  },
  boards: [],
};
