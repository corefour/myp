import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "./common/layout/errors/Page404";
import Home from "./pages/Home/index";

//User Pages
import Users from "./pages/Users";
import UserCreate from "./pages/Users/components/usercreate";
//Company Page
import Company from "./pages/Company";
import CompanyCreate from "./pages/Company/components/companycreate";
import CompanyProfile from "./pages/Company/components/companyprofile";
// Product Page
import Products from "./pages/Products/index";
import ProductCreate from "./pages/Products/components/productcreate";
import ProductEdit from "./pages/Products/components/productedit";
// Pruchase Page
import Purchase from "./pages/Purchase/index";
// User role
import { getCurrentUserRole } from "./services/user";


const Router = () => {
    const [role, setRole] = useState()

    useEffect(() => { getCurrentUserRole().then((res) => setRole(res)) }, [])

    return (
        <Routes>
            <Route path='/' element={<Home />} />

            {(role === "Admins" || role === "Users") && <Route path='/users/*' element={<Users />} />}

            {(role === "Admins" || role === "Users") && <>
                <Route path='/company/*' element={<Company />} />
                <Route path='/company/create' exact element={<CompanyCreate />} />
                <Route path='/company/:id' exact element={<CompanyProfile />} />
            </>}

            <Route path='/products' exact element={<Products />} />
            <Route path='/products/create' exact element={<ProductCreate />} />
            <Route path='/products/edit/:id' exact element={<ProductEdit />} />

            <Route path='/purchase' exact element={<Purchase />} />


            {/* Do not remove this route its for 404 */}
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default Router;