import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './components/store/store';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
            <HashRouter>
                <App />
            </HashRouter>
        </PersistGate>
    </Provider>
);
