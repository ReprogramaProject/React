import { connect } from 'react-redux'
import * as acoes from '../redux/actions'
import Home from '../paginas/Home/Home'

function mapeiaDadosDoStateParaProps(stateGlobal) {
    const props = {
        usuario: stateGlobal.usuario,
        postits: stateGlobal.postits
    }

    return props
}

function mapeiaDisparoDeAcoesParaProps(dispatch) {
    const props = {
        disparaListaPostits: () => {
            dispatch(acoes.disparaAcaoListaPostits())
        },
        disparaAdicionaPostit: (novoPostit) => {
            dispatch(acoes.disparaAcaoAdicionaPostit(novoPostit))
        },
        disparaEditaPostit: (postitEditado) => {
            dispatch(acoes.disparaAcaoEditaPostit(postitEditado))
        },
        disparaRemovePostit: (idPostitRemovido) => {
            dispatch(acoes.disparaAcaoRemovePostit(idPostitRemovido))
        }
    }

    return props
}

const conectaHomeAoStateGlobal = connect(
    mapeiaDadosDoStateParaProps,
    mapeiaDisparoDeAcoesParaProps
)

const HomeConnected = conectaHomeAoStateGlobal(Home)

export default HomeConnected