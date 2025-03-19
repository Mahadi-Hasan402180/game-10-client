import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import AddReview from '../pages/AddReview';
import PrivateRoutes from './PrivateRoutes';
import Homepage from '../components/Homepage';
import AllReviews from '../pages/AllReviews';
import MyReviews from '../components/MyReviews';
import UpdateReview from '../components/UpdateReview';
import ReviewDetailsPage from '../components/ReviewDetailsPage';
import MyWatchlist from '../components/MyWatchlist';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>,
            },

            {
                path: "/addReview",
                element: <PrivateRoutes><AddReview /></PrivateRoutes>
            },

            {
                path: "/allreviews",
                element: <AllReviews></AllReviews>,
                loader: () => fetch('http://localhost:5000/reviews')
            },

            {
                path: "/myReviews",
                element: <PrivateRoutes><MyReviews /></PrivateRoutes>,
            },
            {
                path: "/updateReview/:id",
                element: <UpdateReview />,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },


            {
                path: "/review/:id",
                element: <ReviewDetailsPage></ReviewDetailsPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path: "/myWatchlist",
                element: <PrivateRoutes><MyWatchlist></MyWatchlist></PrivateRoutes>
            }
        ],
    },




    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <Error />,
    },
]);

export default router;
