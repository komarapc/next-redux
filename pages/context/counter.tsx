import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import Container from "../../components/layout/container";
import Wrapper from "../../components/layout/wrapper";
import { StoreCounterContext } from "../../context/counter-context";

export default function ContextCounterPage() {
  const counterCtx: typeof StoreCounterContext =
    useContext(StoreCounterContext);
  const count = counterCtx.countContext;
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Counter with context reducer</title>
      </Head>
      <Wrapper>
        <Container>
          <h1 className="text-2xl text-slate-700 font-light">
            Counter with Context Reducer
          </h1>
          <h1 className="text-xl text-slate-700 font-semibold">
            Count: {count}
          </h1>
          <div className="my-5">
            <button
              className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => counterCtx.countDispatch("increment")}
            >
              Increment
            </button>
            <button
              className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 mx-1"
              onClick={() => counterCtx.countDispatch("decrement")}
            >
              Decrement
            </button>
            <button
              className="px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 mr-1"
              onClick={() => counterCtx.countDispatch("reset")}
            >
              Reset
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white hover:bg-red-600"
              onClick={router.back}
            >
              <FontAwesomeIcon icon={faAngleLeft} className="mr-1" />
              Back
            </button>
          </div>
        </Container>
      </Wrapper>
    </Fragment>
  );
}
