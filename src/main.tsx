import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { reactQueryConfig } from './react-query-config';
import { router } from './routes';

const queryClient = new QueryClient(reactQueryConfig);

if (import.meta.env.DEV) {
  await import('./mocks/browser').then(({ worker }) => {
    worker.start({ onUnhandledRequest: 'bypass' });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
