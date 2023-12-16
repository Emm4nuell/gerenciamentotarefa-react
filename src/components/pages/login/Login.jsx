import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/AuthContext";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.modules.css"
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {InputModel} from "../../input/InputModel";

function Login(){

    const {autentication, setAuth, auth, loand, setLoand} = useContext(Context)

    const [login, setLogin] = useState({
        usuario: '',
        senha: ''
    });

    
    function handlerChanger(event){
        event.preventDefault();
        setLogin((login) => ({...login, [event.target.name]: event.target.value}))
        console.log(typeof login)
    }
    
    function authenticar(e){
        e.preventDefault();
        document.getElementById('divts').classList.add('ts');
        setLoand(true)
        console.warn("Valor do load... " + loand)
        autentication(login)
    }

    return(
        <div className="container_login">
            <div className="container_login_div">


                {/* Imagem com gif na tela de login */}
                <div className="div_login login_gif">
                    <img className="gif" src="./img/website-gif.gif" alt="img"></img>
                </div>


                {/* Div do formulario */}
                <div className="div_login login_form">
                    
                    <img className="logo" src="./img/sgtnovo.png"></img>

                    <form onSubmit={authenticar}>

                        <InputModel htmlFor={'Usuário'} type={'text'} onChanger={handlerChanger} name={'usuario'} required={true}/>
                        <InputModel htmlFor={'Senha'} type={'password'} onChanger={handlerChanger} name={'senha'} required={true}/>

                        <div className="div_input">
                            <div className="recuperarsenha">
                                <a href="/novousuario">Esqueceu a senha?</a>
                            </div>
                        </div>

                        <Button variant="primary" type="submit">Login</Button>
                    </form>


                    <div className="criarconta">
                        <label htmlFor="">Não tem uma conta?</label>
                        <a href="/novousuario">Cadastre-se</a>
                    </div>

                    <div className="login_icons">
                        
                        
                        <a href="https://www.linkedin.com/in/eduardo-emmanuel-096403221/" target="_black"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/eduardo-emmanuel-096403221/" target="_black"><FaFacebook /></a>
                        <a href="https://www.linkedin.com/in/eduardo-emmanuel-096403221/" target="_black"><FaLinkedin /></a>
                        <a href="https://github.com/Emm4nuell" target="_black"><FaGithub /></a>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login