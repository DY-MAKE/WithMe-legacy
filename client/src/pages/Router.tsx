import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';

export enum RoutePath {
    HOME = '/',
}

const RootRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutePath.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRouter;
