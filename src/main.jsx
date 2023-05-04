import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import ChefHeader from './components/ChefHeader.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register';
import AuthProvider from './components/Providers/AuthProvider';
import ErrorPage from './components/Error/ErrorPage';
import PrivateRoute from './components/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      }

    ],
  },



  {
    path: "/chef",
    element: <ChefHeader></ChefHeader>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
