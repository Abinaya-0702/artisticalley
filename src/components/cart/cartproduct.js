import React from 'react';

const CartProduct = () =>{
return(
<div className = "flex flex-row justify-around">
    <div className = "flex flex-col">
        <div>Text 1</div>
        <div>Text2</div>
    </div>
    <div className = "flex flex-col ">
        <div>$1000</div>
        <button>Delete</button>
    </div>
</div>
)
}

export default CartProduct;
