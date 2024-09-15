import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteProduct,
  toggleAvailability,
} from '../reducers/productSlice.js';
import EditProductForm from './EditProductForm.js';

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability(id));
  };

  return (
    <div>
      <h2>Каталог продуктов</h2>
      {products.length === 0 ? (
        <p>Продукты не добавлены.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> (ID: {product.id})
              <p>{product.description}</p>
              <p>Цена: ${product.price.toFixed(2)}</p>
              <p>
                Статус: {product.available ? 'Доступен' : 'Недоступен'}
              </p>
              <button onClick={() => handleToggleAvailability(product.id)}>
                Переключить доступность
              </button>
              <button onClick={() => handleDelete(product.id)}>
                Удалить
              </button>
              <EditProductForm product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
