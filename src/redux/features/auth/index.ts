import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  user: any;
}

const initialState: CounterState = {
  user: null,
};

export const Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = Slice.actions;

export default Slice.reducer;
