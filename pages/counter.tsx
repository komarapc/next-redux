import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/layout/container";
import Wrapper from "../components/layout/wrapper";
import TotalCounter from "../components/pages/counter/total_click";
import { decrement, increament, resetCounter, RootState } from "../store/redux";

function Increament() {
  const dispatch = useDispatch();
  const router = useRouter();
  const click = useSelector((state: RootState) => state.counterReducer.value);
  const title_page = "Counter";

  const handleClickIncreament = () => {
    dispatch(increament());
  };
  const handleClickDecrement = () => {
    if (click <= 0) return;
    dispatch(decrement());
  };
  const handleClickResetConter = () => {
    dispatch(resetCounter());
  };
  return (
    <Fragment>
      <Head>
        <title>{title_page}</title>
      </Head>
      <Wrapper>
        <Container>
          <h1 className="text-2xl text-slate-700 font-light">
            {`${title_page} with Redux`}
          </h1>
          <button
            className="px-3 py-1 m-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleClickIncreament}
          >
            +
          </button>
          <button
            className="px-3 py-1 m-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleClickDecrement}
          >
            -
          </button>
          <button
            className="px-3 py-1 m-1 bg-purple-500 text-white rounded hover:bg-purple-600"
            onClick={handleClickResetConter}
          >
            Reset
          </button>
          <button
            className="px-3 py-1 m-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={router.back}
          >
            Back
          </button>
          <div>
            <TotalCounter />
          </div>
        </Container>
      </Wrapper>
    </Fragment>
  );
}

export default Increament;
