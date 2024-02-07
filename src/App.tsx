import React, { FC, Suspense } from 'react';
// import './components/styles/index.scss';
import { Routes, Route } from 'react-router-dom';
// import Loading from './components/common/Loading/Loading';

const App: FC = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path='*' element={<div>hey</div>} />
            </Routes>
        </Suspense>
    );
};

export default App;
