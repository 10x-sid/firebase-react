import React from 'react'
import {  useCart } from "./context/Cart";

export default function Cart(){
    const {cart} = useCart()
   
    let total = 0


    return(<>

        {cart.map(item=>{
            total += parseInt(item.price)
            return(
                <li>{item.name} --- ${item.price}</li>
            )
        })}
        <h4>total price:{total}</h4>
       


            
    </>)

}