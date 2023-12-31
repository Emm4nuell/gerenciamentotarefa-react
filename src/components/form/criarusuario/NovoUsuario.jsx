import { useState, useEffect } from 'react'
import {findAll, findById, save} from '../../services/Service'
import { InputModel, ButtonModel, ButtonLink } from '../../input/InputModel';
import style from "./NovoUsuario.modules.css"


function NovoUsuario(){

    const [listar, setListar] = useState([])
    const [listId, setListId] = useState([])
    const [file, setFile] = useState('')
    const [image, setImage] = useState("https://dicas.zone/wp-content/uploads/2018/07/Screenshot_16-1.png")
    const [msgerror, setMsgerror] = useState();

    const [dados, setDados] = useState({
        contato: '',
        cpf: '',
        datanascimento: '',
        email: '',
        nome: '',
        senha: '',
        tarefas: [],
      });

    async function submit(e){
        e.preventDefault()
        save(dados)
        .then(response => {
            console.log(response.data)
          })
          .catch( err =>{
            console.warn(err.response.data);
            // setMsgerror(err.response.data.message)
            alert(err.response.data.message)
          })
    }


    const handlerChanger = (event) =>{
        setDados((dados) => ({...dados , [event.target.name]: event.target.value}))
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = () => {
            setImage(reader.result);
          };
    
          reader.readAsDataURL(file);
        }
      };

    function cadastrar(e){ 
    }

    return (
        <div className="container_cadastrar">
            <div className='container_div_cadastro'>
                <form onSubmit={submit}>
            <h1>{msgerror}</h1>
            <div className="span">
                <span>teste</span>
            </div>

                    {/* Div para adicionar foto */}
                    <div className='file_cadastrar'>
                        <img src="./img/sgtnovo.png" className='cadastrar_logo' alt="" />
                        <div className="carregar_imagem">
                            <img src={image} className='preview' width="90px" height="90px"  alt="foto  teste" />
                            <label htmlFor="arquivo">Carregar foto</label>
                            <input type='file' onChange={handleImageChange}  name='file' id='arquivo'/>
                        </div>
                    </div>

                    <div className="div_input_cadastrar">
                        <InputModel htmlFor={'Nome'} type="text" onChanger={handlerChanger} required={true} name={'nome'}/>
                    </div>

                    <div className='div_input_cadastrar'>
                        <InputModel htmlFor='CPF' type="text" onChanger={handlerChanger} required={true} name='cpf'/>
                        <InputModel htmlFor='Email' type="email" onChanger={handlerChanger} required={true} name='email'/>
                    </div>

                    <div className='div_input_cadastrar'>
                        <InputModel htmlFor={'Data Nascimento'} type="date" onChanger={handlerChanger} required={true} name={'datanascimento'}/>
                        <InputModel htmlFor={'Contato'} type="tel" onChanger={handlerChanger} required={true} name={'contato'}/>
                    </div>

                    <div className='div_input_cadastrar'>
                        <select className="select_cadastrar" name="sexo" id="sexo">
                            <option value="">Selecione o sexo</option>
                            <option value="F">FEMININO</option>
                            <option value="M">MASCULINO</option>
                        </select>
                        <InputModel htmlFor={'Setor'} type="" onChanger={handlerChanger} required={true} name={'setor'}/>
                    </div>
                  

                    <div className='div_input_cadastrar'>
                        <InputModel htmlFor={'Senha'} type="password" onChanger={handlerChanger} required={true} name={'senha'}/>
                        <InputModel htmlFor={'Repita Senha'} type="password" onChanger={handlerChanger} required={true} name={'repitasenha'}/>
                    </div>


                    <div className='cadastrar_button'>
                        <ButtonModel className={'green'} type={'submit'} name={'Cadastrar'}/>
                        <ButtonLink className={'red'} name={'Voltar'} href={'../'}/>
                    </div>


                </form>
            </div>

            {/* <h1>Listar</h1> */}

            {/* {listar.map(e => (
                <label key={e.id}>{e.nome}</label>
            ))}
            <h1>Meu nome é {listId.nome}</h1> */}
        </div>
    )
}

export default NovoUsuario;