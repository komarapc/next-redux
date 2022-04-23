import { PayloadAction } from "./../node_modules/@reduxjs/toolkit/src/createAction";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  value: 0,
};

// reducer
export const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});

// store
export const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { increament, decrement, resetCounter } = counterSlice.actions;
