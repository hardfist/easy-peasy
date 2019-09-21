import todosModel, { TodosModel } from './todos';
import auditModel, { AuditModel } from './audit';
import productsModel, { ProductsModel } from './products';
import basketModel, { BasketModel } from './basket';

export interface StoreModel {
  todos: TodosModel;
  audit: AuditModel;
  products: ProductsModel;
  basket: BasketModel;
}

const storeModel: StoreModel = {
  todos: todosModel,
  audit: auditModel,
  products: productsModel,
  basket: basketModel,
};

export default storeModel;
