import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "./common/layout/errors/Page404";
import Home from "./pages/Home/index";

//User Pages
import Users from "./pages/Users";
import UserCreate from "./pages/Users/components/usercreate";
//Company Page
import Company from "./pages/Company";
import CompanyCreate from "./pages/Company/components/companycreate";
// Product Page
import Products from "./pages/Products/index"
// Purchases Page
import Purchases from "./pages/purchaseManagement";
import CreatePurchase from "./pages/purchaseManagement/components/createPurchaseOrder";
import CreateExpenditures from "./pages/purchaseManagement/components/createExpenditures";
import GetExpenditures from "./pages/purchaseManagement/components/getExpenditures";
const Router = () => (
    <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/users/*' element={<Users />} />
        <Route path='/users/create' exact element={<UserCreate />}/>

        <Route path='/company/*' element={<Company />} />
        <Route path='/company/create' exact element={<CompanyCreate />}/>

        <Route path='/products' exact element={<Products />} />

        <Route path='/purchases/' element={<Purchases/>} />
        <Route path='/purchases/create' exact element={<CreatePurchase />}/>

        <Route path='purchases/expenditures/' element={<CreateExpenditures />} />
        <Route path='purchases/expendituresById/' element={<GetExpenditures />} />

        {/* Do not remove this route its for 404 */}
        <Route path="*" element={<Page404 />} />
    </Routes>
)

export default Router;