INSERT INTO Users (username, email, password, createdAt, updatedAt) VALUES
  ('test', 'test@gmail.com', 'test', '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test2', 'test2@gmail.com', 'test2', '2022-01-01 00:00:00', '2022-01-01 00:00:00');

INSERT INTO Boards (title, statusColumn, userId, createdAt, updatedAt) VALUES
  ('test', 'todo', 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test2', 'doing', 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test3', 'done', 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00');

INSERT INTO Boards (title, statusColumn, userId, createdAt, updatedAt) VALUES
  ('test', 'todo', 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test2', 'doing', 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test3', 'done', 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00');

INSERT INTO Tasks (title, description, status, boardId, createdAt, updatedAt) VALUES
  ('test', 'test', 'todo', 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test2', 'test2', 'doing', 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test3', 'test3', 'done', 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00');

INSERT INTO Tasks (title, description, status, boardId, createdAt, updatedAt) VALUES
  ('test', 'test', 'todo', 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test2', 'test2', 'doing', 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test3', 'test3', 'done', 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00');

INSERT INTO SubTasks (title, isCompleted, taskId, createdAt, updatedAt) VALUES
  ('test', false, 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test2', false, 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test3', false, 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00');

INSERT INTO SubTasks (title, isCompleted, taskId, createdAt, updatedAt) VALUES
  ('test', false, 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test2', false, 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
  ('test3', true, 2, '2022-01-01 00:00:00', '2022-01-01 00:00:00');
