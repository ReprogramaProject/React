import axios from 'axios'

const opcoes = {
    baseURL: 'https://reprograma-postit-api.herokuapp.com',
    timeout: 1000
}

const usuario = JSON.parse(localStorage.getItem('usuario'))
if (usuario) {
    opcoes.headers = {
        'Authorization': usuario.token
    }
}

const protocolo = axios.create(opcoes);

export default protocolo