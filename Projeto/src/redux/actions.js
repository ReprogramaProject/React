import { push } from 'react-router-redux'
import * as apiLogin from '../apis/usuarios'
import * as apiPostit from '../apis/postits'


// funções disparadoras de ação

/* ações de usuário */
export function disparaAcaoLogaUsuario(usuario) {
    return dispatch => {
        // aqui podemos fazer coisas antes de disparar a acao...
        
        apiLogin.postUsuario(usuario)
            .then(response => {
                // salva o usuário no localStorage
                const usuarioRespondido = response.data.usuario
                localStorage.setItem('usuario', JSON.stringify(usuarioRespondido))

                // dispara acao para alterar o estado global
                dispatch({
                    type: 'LOGA_USUARIO',
                    payload: {
                        usuario: usuarioRespondido
                    }
                })

                // dispara uma acao para mudar de tela
                dispatch(push('/'))
            })
            .catch(error => {
                alert(error.response.data.erro)
            })

    }
}

export function disparaAcaoDeslogaUsuario() {
    return dispatch => {
        localStorage.removeItem('usuario')

        dispatch({
            type: 'DESLOGA_USUARIO'
        })
    }
}

/* ações de postit */
export function disparaAcaoListaPostits() {
    return dispatch => {
        apiPostit.getPostits()
            .then(response => {
                dispatch({
                    type: 'LISTA_POSTITS',
                    payload: {
                        postits: response.data.postits
                    }
                })
            })
            .catch(error => {
                alert(error.response.data.erro)
            })
    }
}

export function disparaAcaoAdicionaPostit(novoPostit) {
    return dispatch => {
        apiPostit.postPostit(novoPostit)
            .then(response => {
                novoPostit.id = response.data.id

                dispatch({
                    type: 'ADICIONA_POSTIT',
                    payload: {
                        novoPostit: novoPostit
                    }  
                })
            })
    }
}

export function disparaAcaoEditaPostit(postitEditado) {
    return dispatch => {
        apiPostit.putPostit(postitEditado)
            .then(response => {
                dispatch({
                    type: 'EDITA_POSTIT',
                    payload: {
                        postitEditado: postitEditado
                    }
                })
            })
    }
}

export function disparaAcaoRemovePostit(idPostitRemovido) {
    return dispatch => {
        apiPostit.deletePostit(idPostitRemovido)
            .then(response => {
                dispatch({
                    type: 'REMOVE_POSTIT',
                    payload: {
                        idPostitRemovido: idPostitRemovido
                    }
                })
            })
    }
}