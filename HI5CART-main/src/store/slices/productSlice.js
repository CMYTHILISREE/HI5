import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/Products';

const initialState = {
  items: products,
  filteredItems: products,
  categoryFilter: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
      if (action.payload === '') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (product) => product.category === action.payload
        );
      }
    },
  },
});

export const { setCategoryFilter } = productSlice.actions;

export const selectProducts = (state) => state.products.filteredItems;
export const selectAllProducts = (state) => state.products.items;
export const selectCategoryFilter = (state) => state.products.categoryFilter;

export default productSlice.reducer;