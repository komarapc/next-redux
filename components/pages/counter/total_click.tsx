import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux";

export default function TotalCounter() {
  const counter = useSelector((state: RootState) => state.counterReducer.value);
  return (
    <Fragment>
      <h1 className="text-2xl text-slate-700 font-light">
        Total click: {counter}
      </h1>
    </Fragment>
  );
}
