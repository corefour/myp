import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "./common/layout/errors/Page404";
import Users from "./pages/Users/index";
import Home from "./pages/Home/index";


const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        {/* Do not remove this route its for 404 */}
        <Route path="*" element={<Page404 />} />
    </Routes>
)

export default Router;