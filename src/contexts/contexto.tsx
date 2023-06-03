import { createContext, useEffect, useState } from 'react'
import { Props } from '../types';


const Contexto = createContext({} as Props);

function ContextoProvider({ children }: any) {
    const [red, setRed] = useState('' as string)
    const [green, setGreen] = useState('' as string)
    const [blue, setBlue] = useState('' as string)

    useEffect(()=>{
        (async() => {
            setRed('100');
            setGreen('100');
            setBlue('100');
        })();
      },[]);    

    
      return (
        <Contexto.Provider value={{ red, green, blue, setRed, setGreen, setBlue }} >
            <span>{children}</span>
        </Contexto.Provider>
    )
}
export {Contexto, ContextoProvider}