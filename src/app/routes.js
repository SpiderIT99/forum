import Login from "../features/auth/views/Login";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { selectUser } from "../features/auth/authSlice";
import { useAppSelector } from "./hooks";
import Alerts from "../components/Alerts/Alerts";
import Categories from "../features/categories/views/Categories";
import Register from "../features/auth/views/Register";
import PostPage from "../features/PostPage/views/PostPage";
import CreatePostPage from "../features/createPostPage/views/CreatePostPage";

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

const PublicRoute = () => (
  <Layout>
    <Outlet />
    <Alerts />
  </Layout>
);

export const routes = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/create-post",
        element: <CreatePostPage />,
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Categories />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/post/:postId",
        element: <PostPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];
