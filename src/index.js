import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { theme } from "./utils/style";
import reset from "styled-reset";

const root = ReactDOM.createRoot(document.getElementById("root"));
const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: Roboto_Regular;
    font-size: 16px;
    font-weight: 400;
  }
  button {
    font-family: Roboto_Regular;
    font-size: 16px;
    font-weight: 400;
  }
`;

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);
