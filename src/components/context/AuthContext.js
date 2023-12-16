import { createContext, useEffect, useState } from "react";
import { authService } from "../services/Service";

export const Context = createContext();

function AuthProvider({children}){

    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState('')
    const [loand, setLoand] = useState(false);
    
    useEffect(()=>{
        if(localStorage.getItem("token")){
            setAuth(true)
        }else{
            setAuth(false)
        }
        // autentication();
    }, [])

    async function autentication(e) {

        if(!localStorage.getItem("token")){
            setLoand(true)
            authService(e)
            .then((response) => response)
            .then((dados) => {
                setToken(dados.data)
                localStorage.setItem("token", dados.data)
                setAuth(true)
                setLoand(false)
            })
            .catch(err => {
                console.log("Erro na execução" + err.data)
                localStorage.removeItem("token");
                setLoand(false)
            })
        }
    }

    return(
        <Context.Provider value={{auth, setAuth, autentication, loand, setLoand}}>
            {children}
        </Context.Provider>
    )
}

export default AuthProvider;