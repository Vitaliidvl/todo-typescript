import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-contex';
import TodoItem from '../models/TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todoxCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoxCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoxCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
