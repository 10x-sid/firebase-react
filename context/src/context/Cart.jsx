import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext(null)

export function useCart(){
     
    const cart = useContext(cartContext)
    return cart
}

export function Cartprovider({children}){

    const[cart,setCart]=useState([])
    return(
        <>
         <cartContext.Provider value={{cart ,setCart}}>{children}</cartContext.Provider>
        </>
    )
}