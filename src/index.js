import { createRoot } from 'react-dom/client';
import './styles/normalize.scss';
import './styles/global.scss';
import App from './App';
import { StrictMode } from 'react';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
