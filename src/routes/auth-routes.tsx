import { RouteType } from "../models";
import Home from "../pages/home";
import NotFoundPage from "../pages/404";
import InvestorsPage from "../pages/investors-page";
import InvestorsDetailPage from '../pages/investors-detail-page';
import CreateOfferPage from "../pages/create-offer-page";
import ProfilePage from "../pages/profile";
import SignupPage from "../pages/sign-up-page";

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
        path: '/create-offer',
        component: <CreateOfferPage />
    },
    {
        path: 'profile',
        component: <ProfilePage />
    },
    {
        path: '/signup',
        component: <SignupPage />
    },
    {
        path: '*',
        component: <NotFoundPage />
    }
]

export default authRoutes;