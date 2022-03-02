import React, { useState } from 'react';
import Header from '../header/header';
import { Control, LocalForm, Errors } from "react-redux-form";
const AddProduct = () =>{
    const [categpry,setcategory] = useState("")
    const [price,setprice] = useState(0)
    const [description,setdescription] = useState("")
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    const required = (val) => val && val.length;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mail = (val) => val && val.match(mailformat);
    return(
<>
<Header/>
<LocalForm>
<div className = "flex flex-col justify-between my-10 mx-10 ">
    <div className = "text-black font-semibold text-3xl my-10">Let's move to the next step..</div>
    <div className = "text-black text-xl ">Enter the name of your product</div> 
    <Control.text
            model=".name"
            id="name"
            name="name"
            className="bg-gray-300 w-3/6"
            validators={{
              required,
              minLength: minLength(5),
              maxLength: maxLength(40),
            }}
          />
          <Errors
            className="text-red-800 font-semibold"
            model=".name"
            show="touched"
            messages={{
              required: "Required!",
              minLength: "Name must be atleast 5 characters..",
              maxLength: "Name must be less than 40 characters",
            }}
          />
    <div className = "text-black text-xl my-3 ">Select the Product Category from below list</div> 
<Control.select model = ".category" id = "category" className = "bg-gray-300 w-3/6 font-semibold">
<option value = "pottery">Pottery</option>
<option value = "jewellery">Jewellery</option>
<option value = "clothing">Clothing</option>
<option value = "homedecor">Home Decor</option>
</Control.select>
<div className = "text-black text-xl my-3 ">Description of the product (External Links are not allowed) </div> 
<Control.textarea model = ".description" id = "description" className = "bg-gray-300 w-4/6"  validators={{
              required,
              minLength: minLength(25),
              maxLength: maxLength(100),
            }}/>
<Errors
            className="text-red-800 font-semibold"
            model=".description"
            
            show="touched"
            messages={{
              required: "Required!",
              minLength: "Description must be atleast 25 characters..",
              maxLength: "Description must be less than 100 characters",
            }}
          />
</div>


</LocalForm>
</>
    )
}
export default AddProduct;