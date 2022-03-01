import React from "react";
import {Routes,Route} from 'react-router';
import Home from "../home/home";
import CategoryPage from "../products/categoryproducts";
const Main = () =>{
return(
    <Routes>
    <Route path = "/home" element = {<Home/>}/>
    <Route path = "/category/:categoryid" element = {<CategoryPage/>}/>
    </Routes>
)
}
export default Main;