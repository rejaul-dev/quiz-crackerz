import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Blog from '../components/Blog/Blog'
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Cards from "../components/Card/Cards";
import Quiz from "../components/Quiz/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    loader:()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
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
        path: 'topics',
        element:<Topics/>,
      },
      {
        path: '/statistics',
        element:<Statistics/>
      },
      {
        path: 'blog',
        element:<Blog/>
      },
      {
        path:'cards',
        element:<Cards/>,
      },
     {
        path: 'cards/:cardsId',
        loader: async({params})=>{
return fetch(`https://openapi.programming-hero.com/api/quiz/${params.cardsId}`)
        },
        element: <Quiz/>
     }
    ],
  },
]);

export default router;
