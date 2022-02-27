import React from 'react';
import Category from './categorycard';
import promo1 from '../../assets/promos/promo1.jpg';
import promo2 from '../../assets/promos/promo2.jpg';
import Header from '../header/header';
const Home = () =>{
   



return(
 <>
 <Header/>
<div className = "flex flex-row flex-wrap justify-around my-2 ">
  {["clothing","pottery","jewelley","artifact","antique"].map((item,index)=>(      <Category key= {index} title={item}/>
  ))}
</div>

 </>


)
}
export default Home;