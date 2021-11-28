import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  list: any[];
  pagination: any;
  row: any;
}

const initialState: CounterState = {
  list: [],
  pagination: null,
  row: null,
};

export const Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSupplier: (state, action) => {
      state.list = action.payload.list;
      state.pagination = action.payload.pagination;
    },
    setSupplierSelected: (state, action) => {
      state.row = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSupplier, setSupplierSelected } = Slice.actions;

export default Slice.reducer;
