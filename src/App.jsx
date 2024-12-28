import { Navbar } from "./components/Navbar"
import {Login} from "./pages/Login"
import {SignUp} from "./pages/SignUp"
import {Cart} from "./pages/Cart"
import {Products} from "./pages/Products"
import {Items} from "./pages/Items"
import {Wishlist} from "./pages/Wishlist"
import {HomePg} from "./pages/HomePg"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./Styles/Main.css"
import "./Styles/layout.css"
import "./Styles/utils.css"

function App() {
  const ErrorPage = () => {
   return <><HomePg/></>
  };

   const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> < HomePg/> </>
      
    },
    {
      path: "/login",
      element: <> <Navbar /> <Login /> </>
      
    },
    {
      path: "/signup",
      element: <> <Navbar /> <SignUp /> </>,
    },
    {
      path: "/cart",
      element: <> <Navbar /> <Cart /> </>,
    },
    {
      path: "/products",
      element: <> <Navbar /> <Products /> </>,
    },
    {
      path: "/products/:product",
      element: (
        <> <Navbar /> <Products /> </>
      ),
    },
    {
      path: "/items",
      element: <> <Navbar /> <Items /> </>,
    },
    {
      path: "/wishlist",
      element: <> <Navbar /> <Wishlist /> </>,
    },
    {
      path: "*", 
      element: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
