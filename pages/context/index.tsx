import { useRouter } from "next/router";
import { useContext } from "react";
import Container from "../../components/layout/container";
import Wrapper from "../../components/layout/wrapper";
import { ThemeContext } from "../../context/theme-context";

export default function PageContext({ props }: any) {
  const router = useRouter();
  const context = useContext(ThemeContext);
  const { isLightTheme, toggleTheme }: any = context;
  const theme: string = isLightTheme ? "light" : "dark";
  return (
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
      </Container>
    </Wrapper>
  );
}
