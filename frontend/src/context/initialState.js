import { nanoid } from "nanoid";

const initialBoardId = nanoid();
export default {
  activeBoard: {
    name: "Platform Launch",
    id: initialBoardId,
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
  boards: [
    {
      name: "Platform Launch",
      id: initialBoardId,
      columns: ["Todo", "Doing", "Done"],
      tasks: [],
    },
    {
      name: "Marketing Plan",
      id: nanoid(),
      columns: ["Todo", "Doing", "Done"],
      tasks: [],
    },
  ],
};
