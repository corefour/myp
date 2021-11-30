import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Page404 from './common/layout/errors/Page404';

const Router = () => (
    <Routes>
        <Route>
            {/* Do not remove this route its for 404 */}
            <Route path="*" element={<Page404 />} />
        </Route>
    </Routes>
)

export default Router