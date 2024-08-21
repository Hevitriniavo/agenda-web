import { createBrowserRouter } from "react-router-dom";
import SignInView from "../views/SignInView";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { NotFoundView } from "../views/NotFoundView";
import authRoute from "./auth_router";

const router = createBrowserRouter([
    {
        path: "/sign-in",
        element: <SignInView />
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: authRoute
    },
    {
      path: "/*",
      element: <NotFoundView />
    },
]);

export default router;