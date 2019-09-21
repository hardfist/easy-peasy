import React, { useState, useCallback } from 'react';
import { useStoreActions } from '../hooks';

export default function AddTodo() {
  const saveTodo = useStoreActions(actions => actions.todos.saveTodo);

  const [text, setText] = useState('');
  const onButtonClick = useCallback(() => {
    saveTodo(text).then(() => setText(''));
  }, [saveTodo, setText, text]);

  return (
    <>
      <h3>Add Todo</h3>
      <input value={text} onChange={e => setText(e.target.value)} type="text" />
      <button onClick={onButtonClick}>Add</button>
    </>
  );
}
