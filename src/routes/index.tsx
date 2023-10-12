import { createBrowserRouter } from 'react-router-dom';

import { Error404 } from '@/pages/error-404';
import { Home } from '@/pages/home';
import { ReactQuery } from '@/pages/react-query';
import { Zustand } from '@/pages/zustand';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
    children: [
      {
        path: 'query',
        element: <ReactQuery />,
      },
      {
        path: 'zustand',
        element: <Zustand />,
      },
    ],
  },
]);
