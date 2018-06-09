import { connect } from 'react-redux'
import * as acoes from '../redux/actions'
import Login from '../paginas/Login/Login'


function mapeiaDisparoDeAcoesParaProps(dispatch) {
    const props = {
        disparaLogaUsuario: (usuario) => {
            dispatch(acoes.disparaAcaoLogaUsuario(usuario))
        }
    }

    return props
}

const conectaLoginAoStateGlobal = connect(
    null,
    mapeiaDisparoDeAcoesParaProps
)

const LoginConnected = conectaLoginAoStateGlobal(Login)

export default LoginConnected