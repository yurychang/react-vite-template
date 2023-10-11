let mockTodos = [
  {
    id: 'uuid',
    title: 'buy dinner',
    completed: false,
  },
];

let todoId = 0;

// eslint-disable-next-line @typescript-eslint/require-await
export const getTodos = async () => {
  return mockTodos;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const addTodo = async (title: string) => {
  const newTodo = { id: (todoId++).toString(), title, completed: false };
  mockTodos.push(newTodo);
  return newTodo;
};
// eslint-disable-next-line @typescript-eslint/require-await
export const deleteTodo = async (_id: string) => {
  mockTodos = mockTodos.filter(({ id }) => id !== _id);
  return true;
};
