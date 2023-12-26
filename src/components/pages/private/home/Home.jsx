import { useContext, useEffect, useState } from "react";
import {Navigate, useNavigate} from "react-router-dom"
import { Context } from "../../../context/AuthContext";

function Home(){

    const navigator = useNavigate();
    const { setAuth, auth } = useContext(Context)

    useEffect(() =>{
        if(auth){
            navigator("/home")
        }
    }, [])


    function sair(){
        localStorage.removeItem("token")
        setAuth(false)
    }

    return(
        <div>
            <h1>Página Home</h1>
            <button onClick={sair}>Sair</button>
        </div>
    )
}

export default Home;