import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Products from './routes/Products';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import Login from './routes/Login';
import { UserContextProvider } from './context/User';
import SignUp from './routes/SignUp';
import Profile from './routes/Profile';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={BrowserRouter} />
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
