import { RouteType } from "../models";
import Home from "../pages/home";
import NotFoundPage from "../pages/404";
import InvestorsPage from "../pages/investors-page";
import InvestorsDetailPage from '../pages/investors-detail-page';

const authRoutes: RouteType[] = [
    {
        path: '/home',
        component: <Home />
    },
    {
        path: '/investors',
        component: <InvestorsPage />
    },
    {
        path: '/investor/detail/:id',
        component: <InvestorsDetailPage />
    },
    {
        path: '*',
        component: <NotFoundPage />
    }
]

export default authRoutes;