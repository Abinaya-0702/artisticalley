import React, { useState } from 'react';
import Header from '../header/header';

const AddProduct = () =>{
    const [categpry,setcategory] = useState("")
    const [price,setprice] = useState(0)
    const [description,setdescription] = useState("")

    return(
<>
<Header/>
<form>
<div className = "flex flex-col justify-between my-10 mx-10 ">
    <div className = "text-black font-semibold text-3xl my-10">Let's move to the next step..</div>
    <div className = "text-black text-xl ">Select the Product Category from below list</div> 
<select multiple={true} value={['B', 'C']}></select>
</div>
</form>
</>
    )
}
export default AddProduct;