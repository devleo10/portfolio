
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import VercelAnalytics from './components/VercelAnalytics';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <VercelAnalytics />
  </StrictMode>,
);
