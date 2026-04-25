import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUSe from "./components/AboutUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error"
import AboutUs from "./components/AboutUs";

const Applayout = () => {
   return (<div className="App">
      <Header />
      <Outlet />
   </div>
   )
}

const appRouter = createBrowserRouter([

   {
      path: "/",
      element: <Applayout />,
      errorElement:<Error/>,
      children: [

        {
          path:"/",
         element:<Body/>
        },
        {
         path: "/aboutus",
         element:<AboutUs/>
        },
        {
         path:"/contactus",
         element: <ContactUs/>
        }
      ]
   }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);





