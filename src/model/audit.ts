import { Action, action, ActionOn, actionOn } from "easy-peasy";
import { StoreModel } from "./index";

export interface AuditModel {
  logs: string[];
  addLog: Action<AuditModel, string>;
  onTodoAdded: ActionOn<AuditModel, StoreModel>;
}

const auditModel: AuditModel = {
  logs: [],
  addLog: action((state, payload) => {
    state.logs.push(payload);
  }),
  onTodoAdded: actionOn(
    (actions, storeActions) => storeActions.todos.addTodo,
    (state, target) => {
      state.logs.push(`Added todo: "${target.payload}"`);
    }
  )
};

export default auditModel;
