import { createBrowserRouter } from "react-router-dom";

import { Home, PostPage } from "../pages";

export const router = createBrowserRouter([
  //   {
  //     path: "/post",
  //     element: <PostPage />,
  //   },
  {
    path: "/",
    element: <Home />,
  },
]);
