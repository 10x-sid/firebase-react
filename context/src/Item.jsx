import React from "react";
import {  useCart } from "./context/Cart";


export default function Item({name,price}){
    const {cart,setCart}= useCart()
    return(
        <>
        
            <div className="item">
                <h3>{name}</h3>
                <div>price:{price}</div>
                <button onClick={()=>setCart([...cart,{name:name,price:price}])}>ADD to cart</button>

            </div>
        </>
    )
}