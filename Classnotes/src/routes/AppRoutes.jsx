import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import LoginForm from "../components/LoginForm";


function AppRoutes(props) {
  return (
    <Routes>
        <Route index element={<Homepage {...props} />} />
        <Route path="login" element={<LoginForm {...props} />} />
      {/* nested routes, will match on /dash/tasks */}
      {/* /dash */}
      <Route path="dash" element={<DashboardPage {...props} />} >
        {/* /dash/messages */}
        <Route path="messages" element={<DashboardMessages {...props} />} />
        {/* /dash/tasks */}
        <Route path="tasks" element={<DashboardTasks {...props} />} />
      </Route>

      <Route path='/about' element={<AboutPage {...props} />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes;