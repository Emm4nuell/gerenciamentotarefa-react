import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "http://206.42.51.75:8090"
    
    // Interceptor para injetar o token no Authorization
  // const requestInterceptor = axios.interceptors.request.use(function(config){
  //   const token = localStorage.getItem("token");
  //   console.warn("Interceptor axios foi execultado " + token)
  //   if(token){
  //     config.headers.Authorization = token;
  //   }
  //   return config;
  // },
  // function error(err){
  //   axios.interceptors.request.eject(requestInterceptor);
  //   return Promise.reject(err);
  // })

const headers = {
    'Authorization': localStorage.getItem("token"),
    'Content-Type': 'application/json',
  };

// Consumir API findAll
export async function findAll(baseurl){
    return await axios.get(apiUrl + baseurl);
}

export async function findById(baseurl, id){
    console.warn("FindById foi chamado!")
    return await axios.get(`${apiUrl}${baseurl}/${id}`);
}

// Consumir API save
export async function save(usuario){
    console.log("save foi chamado!")
    return await axios.post(`${apiUrl}/usuario/cadastrar`, usuario)
    // .then(response => {
    //   return response.data;
    // })
    // .catch(err =>{
    //   return err;
    // })
}

// export const auth = async (dadosUser) =>{
//     axios.post(`${apiUrl}/usuario/auth`, dadosUser).then((response) => response).then( dados => console.warn("POST: " + dados.data)).catch(err => err)
// }

export async function authService(dadosUser){
  // axiosInterceptor();
    return await axios.post(`${apiUrl}/usuario/auth`, dadosUser);
}

export async function ativarconta(pathname){
  console.warn("Ativar conta: " + pathname)
  return await axios.get(`${apiUrl}/usuario/chaveativacao/${JSON.stringify(pathname)}`);
}
