import { createBrowserRouter } from 'react-router-dom';
import Invitation from '../pages/Invitation';
import HomePage from '../pages/Home';
import { StoryBook } from '../pages/StoryBook';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Invitation />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/book',
    element: <StoryBook />,
  },
]);
