import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Services from '../components/Services';
import ContactPage from '../components/ContactPage';
import ErrorPage from '../components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element : <Services />},
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);
