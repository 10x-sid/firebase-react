import { useContext } from "react"
import { CounterContext } from "./context/Counter"
import Item from "./Item";
import Cart from "./Cart";
import { cartContext } from "./context/Cart";

export default function App(){


  return(
    <>
     <Item name={"mackbook"} price={"100"}  />
     <Item name={"victus"} price={"10"}/>
     <Item name={"s22ultra"} price={"150"}/>
     <br/>
     <Cart/>
    </>
  )
}