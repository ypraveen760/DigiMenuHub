import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import ContactUS from "../components/Contactus";
import About from "../components/About";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import UserContext from "../utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //maked api call and got data
    const data = { name: "Praveen Yadav" };
    setUserName(data.name);
  }, []);

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
