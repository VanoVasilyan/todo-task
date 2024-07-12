import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { store } from './store/store';
import { StyledEngineProvider } from '@mui/material';
import BasicModal from './components/Modal';
import App from './App';
import './index.css';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <App />
        <BasicModal />
      </Provider>
    </StyledEngineProvider>
  </LocalizationProvider>
);
