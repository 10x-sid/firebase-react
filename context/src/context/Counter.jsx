import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext(null)

export function ContextProvider(props){

    const [count,setCount]=useState(0)
    return(
        <>
            <CounterContext.Provider value={{count,setCount}}>{props.children}</CounterContext.Provider>
        </>
    )
}
