import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';
import { Error } from './pages/Error.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { MonthStatistics } from './pages/MonthStatistics.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/monthstatistics',
    element: <MonthStatistics />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Router>
      <App />
    </Router> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
