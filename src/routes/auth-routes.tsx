import { RouteType } from "../models";
import Home from "../pages/home";
import NotFoundPage from "../pages/404";

const authRoutes: RouteType[] = [
    {
        path: '/home',
        component: <Home />
    },
    {
        path: '*',
        component: <NotFoundPage />
    }
]

export default authRoutes;