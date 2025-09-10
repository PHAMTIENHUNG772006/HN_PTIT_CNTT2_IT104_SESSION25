import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact";
import App from "../App";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import Header from "../components/Header";
import Deatail from "../components/Deatail";
import Product from "../components/Product";
import HomeExer6 from "../components/HomeExer6";
import CustomLink from "../components/CustomLink";
import HomePage from "../components/HomePage";
import HomeExer10 from "../components/HomeExer10";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
       { path: "HomeExer10", element: <HomeExer10 /> },
      { path: "/login", element: <Login />, },
      { path: "/register", element: <Register />,children: [
        { path: "login", element: <Login /> }
      ] },
      {
        path: "/header",
        element: <Header />,
        children: [
          { path: "home", element: <HomeExer6 /> },
          { path: "deatail", element: <Deatail /> },
          { path: "product", element: <Product /> },
        ],
      },
      { path: "/customLink", element: <CustomLink /> },

      { path: "home-page", element: <HomePage /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
