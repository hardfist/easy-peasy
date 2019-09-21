import { createStore } from "easy-peasy";
import model from "../model";
import * as todosService from "../services/todos-service";

export interface Injections {
  todosService: typeof todosService;
}
const store = createStore(model, {
  injections: {
    todosService
  }
});

export default store;
