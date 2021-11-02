export const getSavedTodoIds = () => {
  const savedTodoIds = localStorage.getItem('saved_todos')
    ? JSON.parse(localStorage.getItem('saved_todos'))
    : [];

  return savedTodoIds;
};

export const saveTodoIds = (todoIdArr) => {
  if (todoIdArr.length) {
    localStorage.setItem('saved_todos', JSON.stringify(todoIdArr));
  } else {
    localStorage.removeItem('saved_todos');
  }
};

export const removeTodoId = (bookId) => {
  const savedTodoIds = localStorage.getItem('saved_todos')
    ? JSON.parse(localStorage.getItem('saved_todos'))
    : null;

  if (!savedTodoIds) {
    return false;
  }

  const updatedSavedTodoIds = savedTodoIds?.filter((savedTodoId) => savedTodoId !== todoId);
  localStorage.setItem('saved_todos', JSON.stringify(updatedSavedTodoIds));

  return true;
};
