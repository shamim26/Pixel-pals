import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToy from "../pages/MyToy/MyToy";
import AddToy from "../pages/AddToy/AddToy";
import Blog from "../pages/Blog/Blog";
import SingleToy from "../pages/SingleToy/SingleToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-toys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5100/toys"),
      },
      {
        path: "toy/:id",
        element: <SingleToy></SingleToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5100/toys/${params.id}`),
      },
      {
        path: "my-toys",
        element: <MyToy />,
      },
      {
        path: "add-toy",
        element: <AddToy />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
