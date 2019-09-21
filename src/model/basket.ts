import { Computed, computed } from "easy-peasy";
import { Product } from "./products";
import { StoreModel } from "./index";

export interface BasketModel {
  productIds: number[];
  productsInBasket: Computed<BasketModel, Product[], StoreModel>;
}

const basketModel: BasketModel = {
  productIds: [1],
  productsInBasket: computed(
    [state => state.productIds, (_, storeState) => storeState.products.items],
    (productIds, products) =>
      productIds.map(id => products.find(product => product.id === id))
  )
};

export default basketModel;
