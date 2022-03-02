import React from "react";
import {Routes,Route} from 'react-router';
import Home from "../home/home";
import CategoryPage from "../products/categoryproducts";
import AddProduct from "../addproduct/addproductformpage";
const Main = () =>{
return(
    <Routes>
        <Route path = "/" element = {<Home/>}/>
    <Route path = "/home" element = {<Home/>}/>
    <Route path = "/category/:categoryid" element = {<CategoryPage/>}/>
    <Route path = "/addproduct" element = {<AddProduct/>}/>
    </Routes>
)
}
export default Main;