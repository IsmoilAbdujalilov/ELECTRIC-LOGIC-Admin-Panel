import Routes from "Routes";
import { Loader } from "components";
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("pages/Home"));
  const Error = lazy(() => import("pages/Error"));
  const Login = lazy(() => import("pages/Login"));
  const Profile = lazy(() => import("pages/Profile"));
  const Categories = lazy(() => import("pages/Categories"));
  const Registration = lazy(() => import("pages/Registration"));
  const ForgotPassword = lazy(() => import("pages/ForgotPassword"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          element: <Categories />,
          path: "/pages/categories",
        },
        {
          element: <Profile />,
          path: "/pages/profile",
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      element: <Login />,
      path: "/pages/login",
    },
    {
      element: <Registration />,
      path: "/pages/registration",
    },
    {
      element: <ForgotPassword />,
      path: "/pages/forgotpassword",
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
