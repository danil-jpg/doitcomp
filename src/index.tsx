import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store, { persistor } from './components/store/store';
// import Loading from './components/common/Loading/Loading';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
            <HashRouter>
                <App />
            </HashRouter>
        </PersistGate>
    </Provider>
);
