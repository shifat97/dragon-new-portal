import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Account from "../Pages/Account";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Account />,
        children: [
          {
            path: "/account/login",
            element: <Login />,
          },
          {
            path: "/account/register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

export default router;
