import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToy from "../pages/MyToy/MyToy";
import AddToy from "../pages/AddToy/AddToy";
import Blog from "../pages/Blog/Blog";
import SingleToy from "../pages/SingleToy/SingleToy";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-toys",
        element: <AllToys />,
        loader: () => fetch("https://pixel-pals-server.vercel.app/toys"),
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoutes>
            <SingleToy></SingleToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://pixel-pals-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoutes>
            <MyToy />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-toy",
        element: (
          <PrivateRoutes>
            <AddToy />
          </PrivateRoutes>
        ),
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
