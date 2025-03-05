import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App/App';
import './index.css';
import { persistor, store } from './redux/store';
// import { AppTest } from 'components/App/AppTest';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <BrowserRouter basename="/product-list-with-cart">
          <App />
          {/* <AppTest /> */}
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
