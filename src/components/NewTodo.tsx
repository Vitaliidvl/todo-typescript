import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-contex';
import classes from './NewTodo.module.css';

export const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const textRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
    textRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
};
