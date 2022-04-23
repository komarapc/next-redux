import Head from "next/head";
import { createContext, Fragment, useReducer } from "react";
import Container from "../../components/layout/container";
import Wrapper from "../../components/layout/wrapper";
import ContextCounterComponent from "../../components/pages/context/context-counter";

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

function CounterContext() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreCounterContext.Provider
      value={{ countContext: count, countDispatch: dispatch }}
    >
      <Fragment>
        <Head>
          <title>Counter with Context Reducer</title>
        </Head>
        <Wrapper>
          <Container>
            <h1 className="text-2xl text-slate-700 font-light">
              Counter with Context Reducer
            </h1>
            <h1 className="font-semibold text-xl">Count: {count}</h1>
            <div className="my-5">
              <ContextCounterComponent></ContextCounterComponent>
            </div>
          </Container>
        </Wrapper>
      </Fragment>
    </StoreCounterContext.Provider>
  );
}

export default CounterContext;
