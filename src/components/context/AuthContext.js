import { createContext, useEffect, useState } from "react";
// import { authService } from "../services/Service";
import { useNavigate, Navigate } from "react-router-dom";
import Home from "../pages/private/home/Home";
// import axios from "axios";
import { authService, findAll, findById, save } from "../services/Service";
// import Login from "../pages/public/sge/Sge";

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
            // navigate("/")
        }
    }, [])
    

     function autentication(e) {

        if(!localStorage.getItem("token")){
            setLoand(true)
            authService(e)
            .then(response => response)
            .then(response => {
                localStorage.setItem("token", response.data);
                console.warn(response.data)
                setAuth(true)
                // navigate("/home")
            })
            .catch(err => {
                localStorage.removeItem("token")
                setAuth(false)
                console.warn(err.response.data)
                alert(err.response.data.message)
            });
        }
    }

    return(
        <Context.Provider value={{auth, setAuth, autentication, loand, setLoand}}>
            {children}
        </Context.Provider>
    )
}

export default AuthProvider;