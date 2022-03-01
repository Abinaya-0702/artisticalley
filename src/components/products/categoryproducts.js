import React,{useEffect, useState} from 'react';
import {db} from '../../firebase';
import Preview from './productpreview';
import { storage } from '../../firebase';
import Header from '../header/header';
const CategoryPage = () =>{
    const [products,setproducts] = useState([]);
const category = "pottery"
const [imgurl,setimgurl] = useState();
    const fetchProducts = async() =>{
        const response = db.collection(`${category}`);
        const data = await response.get()
        data.docs.forEach(item=>{
            setproducts([...products,item.data()])
        })
        storage.refFromURL(`gs://my-project-9a21a.appspot.com/${category}/craftzltd000/productimg.jpg/`).getDownloadURL().then((url)=>setimgurl(url));
    }

    useEffect(()=>{
        fetchProducts();
      
    },[])

return(
    <>
    <Header/>
    <div className = "flex flex-row justify-around w-5/6">
    <div className = "flex flex-col justify-around align-center">
      
 { products && products.map(product=>{
     console.log(product.img)
        return(
            <div>
            <div key = {product.id} >
                 <Preview name = {product.name} instock = {true} price = {product.price} seller = {product.seller} img = {imgurl} />
                 {/* <img src = {imgurl}/> */}
                 
            </div>
            </div>
        )
    })}

   </div>
   </div>
   </>
)
  

}
export default CategoryPage;