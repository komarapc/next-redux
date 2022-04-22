import { PayloadAction } from "./../node_modules/@reduxjs/toolkit/src/createAction";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// slice/reducer
const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increament: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.value += 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= 1;
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      state.value = 0;
    },
  },
});

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { increament, decrement, resetCounter } = counterSlice.actions;
