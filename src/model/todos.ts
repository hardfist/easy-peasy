import { Action, action, Computed, computed, Thunk, thunk } from 'easy-peasy';
import { Injections } from '../store';

export interface TodosModel {
  items: string[];
  addTodo: Action<TodosModel, string>;
  saveTodo: Thunk<TodosModel, string, Injections>;
  nextTodos: Computed<TodosModel, string[]>;
}

const todosModel: TodosModel = {
  items: ['Learn', 'Build'],
  addTodo: action((state, payload) => {
    state.items.push(payload);
  }),
  saveTodo: thunk(async (actions, payload, { injections }) => {
    const { todosService } = injections;
    await todosService.save(payload);
    actions.addTodo(payload);
  }),
  nextTodos: computed(state => state.items.slice(0, 3)),
};

export default todosModel;
