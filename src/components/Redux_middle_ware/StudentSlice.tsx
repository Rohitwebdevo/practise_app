import { createSlice } from "@reduxjs/toolkit";

type StudentState = {
  value: number;
};

const initialState: StudentState = {
  value: 0,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = studentSlice.actions;
export default studentSlice.reducer;
