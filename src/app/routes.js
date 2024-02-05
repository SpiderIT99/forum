import Login from "../features/auth/views/Login";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { selectUser } from "../features/auth/authSlice";
import Alerts from "../components/Alerts/Alerts";
import Categories from "../features/categories/views/Categories";
import { useAppSelector } from "./hooks";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const user = useAppSelector(selectUser);

  if (user) {
    return (
      <Layout authorized>
        <Outlet />
        <Alerts />
      </Layout>
    );
  }
  return <Navigate to={redirectPath} replace />;
};

const PublicRoute = ({ redirectPath = "/categories" }) => {
  const user = useAppSelector(selectUser);

  if (user) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <Layout>
      <Outlet />
      <Alerts />
    </Layout>
  );
};

export const routes = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Categories />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];
