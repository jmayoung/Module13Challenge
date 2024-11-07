import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import CandidateSearch from './pages/CandidateSearch.tsx';
import SavedCandidates from './pages/SavedCandidates.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import { Candidate } from './interfaces/Candidate.interface';

// Load saved candidates from localStorage
const savedCandidates: Candidate[] = JSON.parse(localStorage.getItem('potentialCandidates') || '[]');

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // App wraps the main layout with Nav included
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CandidateSearch />, // Home page
      },
      {
        path: 'saved',
        element: <SavedCandidates savedCandidates={savedCandidates} />, // Potential Candidates page
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
