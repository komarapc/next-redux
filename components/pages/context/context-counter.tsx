import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import { StoreCounterContext } from "../../../pages/context/counter";

export default function ContextCounterComponent() {
  const counterCtx: typeof StoreCounterContext =
    useContext(StoreCounterContext);
  const router = useRouter();
  return (
    <Fragment>
      <button
        className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-500 rounded"
        onClick={() => counterCtx.countDispatch("increment")}
      >
        Increment
      </button>
      <button
        className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-500 rounded m-1"
        onClick={() => counterCtx.countDispatch("decrement")}
      >
        Decrement
      </button>
      <button
        className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-500 rounded"
        onClick={() => counterCtx.countDispatch("reset")}
      >
        Reset
      </button>
      <button
        className="px-3 py-1 bg-red-500 text-white hover:bg-red-500 ml-1 rounded"
        onClick={router.back}
      >
        Back
      </button>
    </Fragment>
  );
}
