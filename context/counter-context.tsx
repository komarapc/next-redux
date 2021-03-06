import Head from "next/head";
import { createContext, Fragment, useReducer } from "react";

const initialState: number = 0;
export const StoreCounterContext: any = createContext(initialState);
const reducer = (state: number, action: any) => {
  switch (action) {
    case "increment":
      state += 1;
      return state;
    case "decrement":
      state -= 1;
      return state;
    case "reset":
      state = 0;
      return state;
    default:
      return initialState;
  }
};

function CounterContextProvider({ children }: any) {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreCounterContext.Provider
      value={{ countContext: count, countDispatch: dispatch }}
    >
      {children}
    </StoreCounterContext.Provider>
  );
}

export default CounterContextProvider;
