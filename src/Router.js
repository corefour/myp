import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "./common/layout/errors/Page404";
import Home from "./pages/Home/index";

//User Pages
import Users from "./pages/Users";
import UserCreate from "./pages/Users/components/usercreate";
import Products from "./pages/Products/index"

const Router = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/*' element={<Users />} />
        <Route path='/users/create' exact element={<UserCreate />} />

        <Route path='/products' exact element={<Products />} />
        {/* Do not remove this route its for 404 */}
        <Route path="*" element={<Page404 />} />
    </Routes>
)

export default Router;