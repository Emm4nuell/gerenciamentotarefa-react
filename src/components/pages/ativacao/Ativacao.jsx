import { useEffect, useState } from "react"
import "./Ativacao.modules.css"
import { Navigate, useNavigate } from "react-router-dom"
import { ativarconta } from "../../services/Service";

function Ativacao(){

    const navigator = useNavigate();
    const [msg, setMsg] = useState(true)
    // const [chaveativacao, setChaveativacao] = useState('');


    useEffect(() => {

        var c = window.location.pathname.split("/")[2];
        serviceativar(c);

        console.warn("Ativação foi chamada!" + c)

        // ativarconta(atv)
        // .then(response => {
        //     // setInterval(redirect, 3000)
        //     console.log(response)
        // })    
        // .catch(err => {
        //     // setInterval(redirect, 3000);
        //     console.log(err)
        //     setMsg(false)
        // })

    }, [])

    function serviceativar(dados){

        console.warn("Ativação foi chamada serviceativar!" + dados)
        
        ativarconta(dados)
        .then(response => {
            console.log("Then aceito == " + response)
            setInterval(redirect, 3000);
        })
        .catch(err => {
            console.error("Then error = " + err)
            setMsg(false)
            setInterval(redirect, 3000);
            // navigator('/login')
        })
    }

    function redirect(){
        navigator("/login");
    }

    return(
        <div className="container_ativacao">
            <div className="ativacao_msg">
                {msg ? (<p className="text_green">Parabéns!</p>) : <p className="text_red">Erro ao validar sua conta!</p>}
            {/* <p>Sua conta foi ativada com sucesso!</p> */}
            </div>
        </div>
    )
}

export default Ativacao