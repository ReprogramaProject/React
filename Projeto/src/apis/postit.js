import protocolo from './configuracao'


export function listaPostits() {
    const url = '/postits'

    return protocolo.get('/postits')
}

export function adicionaPostit(postit) {
    const url = '/postits'
    const json = {
        titulo: postit.titulo,
        texto: postit.texto
    }

    return protocolo.post(url, json)
}

export function editaPostit(postit) {
    const url = `/postits/${postit.id}`
    const json = {
        titulo: postit.titulo,
        texto: postit.texto
    }
    
    return protocolo.put(url, json)
}

export function removePostit(id) {
    const url = `/postits/${id}`

    return protocolo.delete(url)
}