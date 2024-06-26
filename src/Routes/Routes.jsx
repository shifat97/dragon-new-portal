import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Account from "../Pages/Account";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Feed from "../Components/Feed";
import News from "../Components/News";
import AllNews from "../Components/AllNews";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Feed />,
            children: [
              {
                path: "/",
                element: <AllNews />,
                loader: () => fetch("/news.json"),
              },
            ],
          },
          {
            path: "/news/:id",
            element: (
              <PrivateRoute>
                <News />
              </PrivateRoute>
            ),
            loader: () => fetch("/news.json"),
          },
        ],
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
