import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import DashboardPage, {
  DashboardMessages,
  DashboardTasks,
} from "../Pages/DashboardPage";
import PageNotFound from "../Pages/PageNotFound";
import Homepage from "../Pages/Homepage";
import LoginForm from "../components/LoginForm";
import PostsPage, { Post, PostList} from "../pages/PostsPage";
import ProtectedRoute from "./ProtectedRoutes";


function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="login" element={<LoginForm {...props} />} />
      {/* nested routes, will match on /dash/tasks */}
      {/* /dash */}
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        {/* /dash/messages */}
        <Route path="messages" element={<DashboardMessages {...props} />} />
        {/* /dash/tasks */}
        <Route path="tasks" element={<DashboardTasks {...props} />} />
      </Route>

      <Route
        path="/about"
        element={
          <ProtectedRoute redirectpath="/">
            <AboutPage {...props} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/posts"
        element={
          <ProtectedRoute>
            <PostsPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;