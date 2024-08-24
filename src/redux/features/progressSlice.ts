import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    updateProgress: (state, action) => {
      state.value = action.payload;
    },
    clearProgress: (state) => {
      state.value = 0;
    },
  },
});

export const { updateProgress, clearProgress } = progressSlice.actions;

export default progressSlice.reducer;
