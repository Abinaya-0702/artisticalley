import React,{useEffect, useState} from 'react';
import db from '../../firebase';

const CategoryPage = () =>{
    const [products,setproducts] = useState([]);

    const fetchProducts = async() =>{
        const response = db.collection('pottery');
        const data = await response.get()
        data.docs.forEach(item=>{
            setproducts([...products,item.data()])
        })
    }

    useEffect(()=>{
        fetchProducts();
    },[])


    console.log(products)
   return(
       <div> {products && products.map(product=>{
           return(
               <div key = {product.id} >
                   <h4>{product.name}</h4>
               </div>
           )
       })} </div>
   )

}
export default CategoryPage;