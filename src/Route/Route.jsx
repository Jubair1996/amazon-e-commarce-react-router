import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: ()=> fetch(`https://dummyjson.com/products`)
            }, 
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
          ],
    },
])

export default router;