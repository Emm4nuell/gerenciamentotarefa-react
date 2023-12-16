import axios from "axios";
import { useState } from "react";

const apiUrl = "http://localhost:8090"

const headers = {
    'headers': {
        'Content-Type': 'application/json'
    }
}

// Consumir API findAll
export function findAll(baseurl){
    return axios.get(apiUrl + baseurl);
}

export function findById(baseurl, id){
    console.warn("FindById foi chamado!")
    return axios.get(`${apiUrl}${baseurl}/${id}`);
}

// Consumir API save
export function save(){
    console.log("save foi chamado!")
}

// export const auth = async (dadosUser) =>{
//     axios.post(`${apiUrl}/usuario/auth`, dadosUser).then((response) => response).then( dados => console.warn("POST: " + dados.data)).catch(err => err)
// }

export function authService(dadosUser){
    return axios.post(`${apiUrl}/usuario/auth`, dadosUser, headers)
}
