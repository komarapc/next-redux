import { Component, createContext, useState } from "react";

type TInitialState = {
  isLightTheme: boolean;
};

const initialState = {
  isLightTheme: true,
};
export const ThemeContext: any = createContext("");

function ThemeProvider({ children }: any) {
  const [themeProvider, setThemeProvider] = useState({ isLightTheme: false });
  const toggleTheme = () => {
    setThemeProvider({ isLightTheme: !themeProvider.isLightTheme });
  };
  return (
    <ThemeContext.Provider
      value={{ ...themeProvider, toggleTheme: toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
