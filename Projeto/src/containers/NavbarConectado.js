import { connect } from 'react-redux'
import * as acoes from '../redux/actions'
import Navbar from '../componentes/Navbar/Navbar'

function mapeiaDadosDoStateParaProps(stateGlobal) {
    const props = {
        usuario: stateGlobal.usuario
    }

    return props
}

function mapeiaDisparoDeAcoesParaProps(dispatch) {
    const props = {
        disparaDeslogaUsuario: () => {
            dispatch(acoes.disparaAcaoDeslogaUsuario())
        }
    }

    return props
}

const conectaNavbarAoStateGlobal = connect(
    mapeiaDadosDoStateParaProps,
    mapeiaDisparoDeAcoesParaProps
)

const NavbarConnected = conectaNavbarAoStateGlobal(Navbar)

export default NavbarConnected