import { combineReducers } from "redux";

// funções manipuladoras de ação

/* reducers de usuário */
function manipulaAcoesDeUsuario(usuarioAnterior = JSON.parse(localStorage.getItem('usuario')), acao) {
    switch(acao.type) {
        case 'LOGA_USUARIO':
            return acao.payload.usuario
        case 'DESLOGA_USUARIO':
            return null
        default:
            return usuarioAnterior
    }
}

/* reducers de postit */
function manipulaAcoesDePostits(postitsAnteriores = [], acao) {
    switch(acao.type) {
        case 'LISTA_POSTITS':
            return acao.payload.postits
        case 'ADICIONA_POSTIT':
            return postitsAnteriores.concat(
                acao.payload.novoPostit
            ) 
        case 'EDITA_POSTIT':
            return postitsAnteriores.map(
                postitAtual => {
                    if (postitAtual.id === acao.payload.postitEditado.id) {
                        return acao.payload.postitEditado
                    } else {
                        return postitAtual
                    }
                }
            )
        case 'REMOVE_POSTIT':
            return postitsAnteriores.filter(
                postitAtual => {
                    return postitAtual.id !== acao.payload.idPostitRemovido ? true : false
                }
            )
        default:
            return postitsAnteriores
    }
}

const reducers = combineReducers({
    usuario: manipulaAcoesDeUsuario,
    postits: manipulaAcoesDePostits
})

export default reducers