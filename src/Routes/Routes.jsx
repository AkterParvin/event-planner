import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import ServiceDetail from "../Pages/Services/ServiceDetail";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../Pages/Blog/Blog";

const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/service.json'),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: '/serviceDetail/:id',
                element: <PrivateRoutes>
                    <ServiceDetail></ServiceDetail>
                </PrivateRoutes>,
                loader: () => fetch('/service.json'),
            },
            {
                path: "/contact",
                element: <PrivateRoutes>
                    <Contact></Contact>
                </PrivateRoutes>
            },
            {
                path: "/blog",
                element: <PrivateRoutes>
                    <Blog></Blog>
                </PrivateRoutes>,
                loader:()=>fetch('/data.json'),
            }
        ]
    },
]);

export default routes;