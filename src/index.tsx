import React from "react";
import { render } from "react-dom";
import { StoreProvider } from "easy-peasy";
import "./styles.css";
import Todos from "./components/todos";
import AddTodo from "./components/add-todo";
import NextTodos from "./components/next-todos";
import BasketProducts from "./components/basket-products";
import store from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <NextTodos />
        <Todos />
        <AddTodo />
        <BasketProducts />
      </div>
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
