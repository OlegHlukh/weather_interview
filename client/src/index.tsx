import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import App from './App';
import setupStore from './store';
import GlobalStyle from './styles/global-style';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
