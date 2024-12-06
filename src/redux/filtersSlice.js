
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '', // фільтр за ім'ям
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Селектор для отримання фільтра
export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
