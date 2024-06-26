import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { store } from './store/store';
import App from './App';
import './index.css';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocalizationProvider>
);

