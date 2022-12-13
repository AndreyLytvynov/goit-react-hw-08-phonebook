import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { theme } from './components/Theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
