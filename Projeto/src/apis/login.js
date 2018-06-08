import protocolo from './configuracao'


export function logaUsuario(usuario) {
    const url = '/login'
    const json = {
        email: usuario.email,
        senha: usuario.senha
    }

    return protocolo.post(url, json)
}