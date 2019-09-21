import React from 'react';
import { useStoreState } from '../hooks';

export default function NextTodos() {
  const todos = useStoreState(state => state.todos.nextTodos);
  return (
    <>
      <h2>Next 3 Todos</h2>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
