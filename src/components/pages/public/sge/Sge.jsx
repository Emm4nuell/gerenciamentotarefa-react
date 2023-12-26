import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../../context/AuthContext";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sge.modules.css"
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {InputModel} from "../../../input/InputModel";
import { useLocation, useNavigate } from "react-router-dom";

function Sge(){
    
    const div_scroll = document.querySelectorAll(".section_principal");
    const height = window.innerHeight;
    const width = window.innerWidth;
    const [ref, setRef] = useState(0);
    const [contador, setContador] = useState(0)
    const [condicional, setCondicional] = useState(true)
    let x = 0;
    
    useEffect((e) => {
        const span = document.getElementById("span1").innerText
        const span0 = document.getElementById("span0")
        // var s = document.createElement('span')
        const arrayspan = span.split("")


        setInterval(() => {
            if(x < arrayspan.length){
                console.error(x)
                span0.innerText += arrayspan[x]
                x++
            }
            }, 30)

        


        // if(contador < arrayspan.length){
        //     setTimeout(() => {span0.innerText += arrayspan[contador]}, 1000)
        //     contador++
        //     console.error(contador)
        // }
        // else{
        //     setCondicional(false)
        // }

    }, [])
    
    useEffect((e) => {
        const li = document.getElementById(`li0`)
        window.scroll(0, height*ref)
        li.classList.add("scale")
        // console.error(`X: ${width} || Y: ${height}`)
    }, [])
    
    function scroll(e){
        const li = document.getElementById(`li${e}`)
        if(ref != e){
            setRef(e)
            document.getElementById(`li${ref}`).classList.remove('scale')
            li.classList.add('scale')
            window.scroll(0, height*e)
        }
    }

    return(
        <div className="container_sge">

            {/* HEADER */}
            <header className="header_principal">
                <div className="logo">
                    <img className="logo" src="./img/sge.png"></img>
                </div>

                {/* NAV */}
                <nav>
                    <ul>
                        <li id="li0"><a onClick={() => scroll(0)}>Home</a></li>
                        <li id="li1"><a onClick={() => scroll(1)}>Perfil</a></li>
                        <li id="li2"><a onClick={() => scroll(2)}>Apresentação</a></li>
                        <li id="li3"><a onClick={() => scroll(3)}>Sobre</a></li>
                    </ul>
                </nav>

                <div className="button">
                    <a href="#" >Sign up</a>
                </div>
            </header>

            {/* MAIN */}
            <main className="sge_main">
                <section className="section_principal sec0">
                    <div className="section1">
                        <div className="span" id="span">
                            <h1>Um pouco sobre mim:</h1>
                            <span id="span0"></span>
                            <span id="span1">
                                    Sou um desenvolvedor de software apaixonado e altamente motivado, dedicado a criar soluções inovadoras e eficientes. 
                                Com uma sólida formação acadêmica em Sistemas para Internet e anos de experiência prática, 
                                desenvolvi uma profunda compreensão de diversas tecnologias e frameworks.

                                {/* Minha abordagem para o desenvolvimento de software é baseada na resolução criativa de problemas e na entrega de produtos de alta qualidade. Sou proficientemente versado em linguagens de programação como JavaScript, Python e Java, e tenho experiência significativa no desenvolvimento de aplicações web e móveis.
                                Minhas habilidades técnicas incluem:
                                - Desenvolvimento Front-end: HTML5, CSS3, JavaScript (React, Angular)
                                - Desenvolvimento Back-end: Java (Spring)
                                - Banco de Dados: MySQL, PostgreSQL
                                - Controle de Versão: Git, GitHub
                                - Metodologias Ágeis: Scrum */}

                                {/* Além das habilidades técnicas, sou conhecido por minha abordagem proativa, 
                                capacidade de aprendizado rápido e excelentes habilidades de comunicação. 
                                Estou constantemente buscando aprimorar minhas habilidades técnicas e me manter atualizado com as últimas tendências no mundo da tecnologia.

                                Estou entusiasmado com a oportunidade de contribuir para projetos desafiadores, 
                                enfrentar novos desafios e continuar aprimorando minhas habilidades como desenvolvedor de software. 
                                Estou disponível para discussões sobre como minha experiência pode ser uma mais-valia para sua equipe. */}
                            </span>
                        </div>
                        <div className="span">
                            span 2
                        </div>
                    </div>
                </section>

                <section className="section_principal sec1">
                    <h1>Section 2</h1>
                </section>

                <section className="section_principal sec2">
                    <h1>Section 3</h1>
                </section>

                <section className="section_principal sec3">
                    <h1>Section 4</h1>
                </section>


                {/* Imagem com gif na tela de login
                <div className="div_sge sge_gif">
                    <img className="gif" src="./img/website-gif.gif" alt="img"></img>
                </div> */}


                {/* Div do formulario */}
                {/* <div className="div_sge sge_form">
                    
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
                    </div> */}

                    {/* <div className="sge_icons">
                        
                        
                        <a href="https://www.linkedin.com/in/eduardo-emmanuel-096403221/" target="_black"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/eduardo-emmanuel-096403221/" target="_black"><FaFacebook /></a>
                        <a href="https://www.linkedin.com/in/eduardo-emmanuel-096403221/" target="_black"><FaLinkedin /></a>
                        <a href="https://github.com/Emm4nuell" target="_black"><FaGithub /></a>
                        
                    </div>

                </div> */}

            </main>
        </div>
    )
}

export default Sge


    // const navigator = useNavigate();
    // const locator = useLocation();
    // const {autentication, setAuth, auth, loand, setLoand} = useContext(Context)
    // const [login, setLogin] = useState({
    //     usuario: '',
    //     senha: ''
    // });

    // useEffect(function effect(){
    //     if(!auth){
    //         navigator("/login")
    //     }
    // }, [])


    // function ts(){
    //     console.warn("SetInterval foi chamado!" + locator.pathname)
    // }
    
    // function handlerChanger(event){
    //     event.preventDefault();
    //     setLogin((login) => ({...login, [event.target.name]: event.target.value}))
    // }

    // function authenticar(e){
    //     e.preventDefault();
    //     autentication(login)
    // }