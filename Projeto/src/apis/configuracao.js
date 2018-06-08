import axios from 'axios'

const protocolo = axios.create({
    baseURL: 'https://reprograma-postit-api.herokuapp.com',
    timeout: 1000
});

export default protocolo