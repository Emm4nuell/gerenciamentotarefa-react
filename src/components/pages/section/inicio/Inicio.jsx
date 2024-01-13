import { useEffect } from "react"
import "./Inicio.modules.css"


function Inicio(){



    const height = window.innerHeight
    var divperfil = document.getElementById('nome')
    // var off = divperfil.offsetTop();
    
    useEffect(()=> {

        // divperfil.classList.remove('animacao_nome_js')
        // divperfil.classList.add('animacao_nome_js')
        // console.warn(off)
        // if(divperfil.offsetTop != null){
        //     console.log("Distancia: " + divperfil.offsetTop)

        // }
    }, [])

    return(
        <div className="section1">
            <div className="section1_perfil">
                <div className="sobre_mim">
                    <p>Olá, eu sou</p>
                    <div className="nome">
                        <h1 id="nome_bordas">Eduardo Emmanuel</h1>
                        <h1 id="nome">Eduardo Emmanuel</h1>
                    </div>
                    <p></p>
                </div>
                <div className="perfil">
                    <div className="bordas_foto">
                        <div className="bordas">

                        </div>
                        <div className="foto">
                            <img src="./img/perfil.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Inicio