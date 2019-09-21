import React from 'react';
import { useStoreState } from '../hooks';

export default function BasketProducts() {
  const products = useStoreState(state => state.basket.productsInBasket);
  return (
    <>
      <h2>Products in Basket</h2>
      <ul>
        {products.map(product => (
          <li>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
