import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from '../components/Home/Home'
import Root from "../components/Root/Root";
import Snippets from '../components/Snippets/Snippets'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'home',
            element: <Home/>
        },
        {
            path: 'snippets',
            element: <Snippets/>
        },
    ]
  },
]);

export default router;
