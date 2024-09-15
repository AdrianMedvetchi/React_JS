import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reducers/productSlice.js';

function AddProductForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.price) {
      dispatch(
        addProduct({
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          available: formData.available,
        })
      );
      setFormData({
        name: '',
        description: '',
        price: '',
        available: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Добавить новый продукт</h2>
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
      <button type="submit">Добавить продукт</button>
    </form>
  );
}

export default AddProductForm;
