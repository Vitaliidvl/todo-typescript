import React, { useState } from 'react';
import Todo from '../models/Todo';

type TodosContexObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContexObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prev) => prev.concat(newTodo));
  };

  const deleteHandler = (todosId: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== todosId));
  };

  const contextValue: TodosContexObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
