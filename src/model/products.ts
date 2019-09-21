export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductsModel {
  items: Product[];
}

const productsModel: ProductsModel = {
  items: [{ id: 1, name: 'Shoes', price: 20 }],
};

export default productsModel;
