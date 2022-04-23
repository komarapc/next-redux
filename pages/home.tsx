import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Container from "../components/layout/container";
import Wrapper from "../components/layout/wrapper";

export default function Homepage() {
  const router = useRouter();
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <h1 className="text-2xl text-slate-700 font-light">Homepage</h1>
          <div className="my-3">
            <Link href={"/counter"}>
              <a className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded">
                Counter
              </a>
            </Link>

            <Link href={"/context"}>
              <a className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded">
                Context
              </a>
            </Link>
          </div>
        </Container>
      </Wrapper>
    </Fragment>
  );
}
