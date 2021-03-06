import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import Container from "../../components/layout/container";
import Wrapper from "../../components/layout/wrapper";
import { ThemeContext } from "../../context/theme-context";

export default function PageContext({ props }: any) {
  const router = useRouter();
  const context = useContext(ThemeContext);
  const { isLightTheme, toggleTheme }: any = context;
  const theme: string = isLightTheme ? "light" : "dark";
  return (
    <Fragment>
      <Head>
        <title>createContext</title>
      </Head>
      <Wrapper>
        <Container>
          <h1 className="text-2xl text-slate-700 font-light">createContext</h1>
          <div>theme: {theme}</div>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={toggleTheme}
          >
            Switch theme
          </button>
          <button
            className="px-3 py-1 m-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={router.back}
          >
            Back
          </button>
          <div className="my-5">
            <Link href={"/context/counter"}>
              <a className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded">
                Counter with Context reducer
              </a>
            </Link>
          </div>
        </Container>
      </Wrapper>
    </Fragment>
  );
}
