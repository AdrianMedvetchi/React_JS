import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../reducers/productSlice.js';

function EditProductForm({ product }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    ...product,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: product.id,
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        available: formData.available,
      })
    );
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)}>Редактировать продукт</button>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Редактировать продукт</h3>
      <div>
        <label>
          Название:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Описание:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
      </div>
      <div>
        <label>
          Цена:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            step="0.01"
          />
        </label>
      </div>
      <div>
        <label>
          Доступность:
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Обновить продукт</button>
      <button type="button" onClick={() => setIsEditing(false)}>
        Отмена
      </button>
    </form>
  );
}

export default EditProductForm;
