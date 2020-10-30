import React from "react";
import Page from "./pages";
import { ThemeProvider } from "styled-components";

const theme = {
  base: "#484747",
  accent: "#1A93CF",
  darkAccent: "#033751",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Page />
      </div>
    </ThemeProvider>
  );
}

export default App;
