import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  list: any;
  pagination: any;
}

const initialState: CounterState = {
  list: [],
  pagination: null,
};

export const Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSupplier: (state, action) => {
      state.list = action.payload.list;
      state.pagination = action.payload.pagination;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSupplier } = Slice.actions;

export default Slice.reducer;
