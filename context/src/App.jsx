import { useContext } from "react"
import { CounterContext } from "./context/Counter"

export default function App(){

  const context = useContext(CounterContext) //use the all the value of that context and all can acces which are under provider of that
  console.log(context);
  return(
    <>
     <div>current count is {context.count}</div>
     <button onClick={()=>context.setCount(context.count+1)}>Inc</button >
     <button onClick={()=>context.setCount(context.count-1)}>dec</button >
     <button onClick={()=>context.setCount(context.count+1)}>Inc</button >
     <button onClick={()=>context.setCount(context.count-1)}>dec</button >
     <button onClick={()=>context.setCount(context.count+1)}>Inc</button >
     <button onClick={()=>context.setCount(context.count-1)}>dec</button >
    </>
  )
}