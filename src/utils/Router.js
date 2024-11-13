import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Success } from "components/Success";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/success", element: <Success /> },
]);
