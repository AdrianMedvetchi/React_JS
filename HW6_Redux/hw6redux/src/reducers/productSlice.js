import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  nextId: 1, // Для отслеживания следующего ID продукта
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: state.nextId,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        available: action.payload.available,
      };
      state.products.push(newProduct);
      state.nextId += 1;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const { id, name, description, price, available } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.description = description;
        existingProduct.price = price;
        existingProduct.available = available;
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  updateProduct,
  toggleAvailability,
} = productSlice.actions;

export default productSlice.reducer;
