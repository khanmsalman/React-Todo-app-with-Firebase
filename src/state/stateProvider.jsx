import { createContext, useContext, useState } from "react";

export const context = createContext(null);

export const StateProvider = ({children})=>{
    const [todos,setTodos] = useState([])

    return(
        <context.Provider value={{todos,setTodos}} >
            {children}
        </context.Provider>
    )
}

export const useStateValue=()=>useContext(context);
