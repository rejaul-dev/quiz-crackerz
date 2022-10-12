import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Cards from "../components/Card/Cards";
import Quiz from "../components/Quiz/Quiz";
import Collections from "../components/Collections/Collections";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "cards/:cardsId",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.cardsId}`
          );
        },
        element: <Quiz />,
      },
    ],
  },
]);

export default router;
