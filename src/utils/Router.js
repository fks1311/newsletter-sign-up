import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Success } from "components/Success";

export const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/success", element: <Success /> },
  ],
  {
    future: {
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
