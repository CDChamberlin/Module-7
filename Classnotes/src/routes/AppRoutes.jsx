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
import PostsPage, { Post, PostList} from "../Pages/PostsPage";

//special component containing all the possible routes for the app
// any props passed into AppRoutes will also pass onto child components using {...props}

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="login" element={<LoginForm {...props} />} />
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      {/* nested routes, matches on /dash/tasks etc */}
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        {/* /dash/messages */}
        <Route path="tasks" element={<DashboardTasks />} />
        {/* /dash/tasks */}
      </Route>

      <Route path="about" element={<AboutPage {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
      <Route path='posts' element={<PostsPage {...props} />}>
        <Route index element={<PostList/>}/>

        {/* dynamic id variable */}
        <Route path=":id" element={<Post/>}/>
      </Route>
    </Routes>
  );
}

export default AppRoutes;