import { RouteType } from "../models";
import Home from "../pages/home";
import NotFoundPage from "../pages/404";

const privateRoutes: RouteType[] = [
    {
        path: '/home',
        component: <Home />
    },
    {
        path: '*',
        component: <NotFoundPage />
    }
];

export default privateRoutes;