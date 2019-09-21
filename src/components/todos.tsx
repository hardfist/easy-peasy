import React from 'react';
import { useStoreState } from '../hooks';

export default function TodoList() {
  const todos = useStoreState(state => state.todos.items);
  return (
    <>
      <h2>All Todos</h2>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
