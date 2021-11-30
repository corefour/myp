import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Page404 from './common/layout/errors/Page404';
import Home from './common/layout/Home';


const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* Do not remove this route its for 404 */}
        <Route path="*" element={<Page404 />} />
    </Routes>
)

export default Router