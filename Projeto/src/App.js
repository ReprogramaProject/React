import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css'

/* 
<Route exact path="/" render={props => {
  if (this.state.usuario) {
    return <Home />
  } else {
    return <Redirect to="/login" />
  }
}} />
*/
class App extends React.Component {
  constructor(props) {
    super(props)
    const usuario = JSON.parse(localStorage.getItem('usuario'))

    this.state = {
      usuario: usuario || null
    }

    this.logaUsuario = this.logaUsuario.bind(this)
    this.deslogaUsuario = this.deslogaUsuario.bind(this)
  }

  logaUsuario(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario))
    
    this.setState({
      usuario: usuario
    })
    
    this.props.history.push('/')
  }

  deslogaUsuario() {
    localStorage.removeItem('usuario')

    this.setState({
      usuario: null
    })
  }

  render() {
    return (
      <div className="app">
        <Navbar 
          usuario={this.state.usuario}
          onSairClick={this.deslogaUsuario}
        />

        <Switch>
          <Route exact path="/" render={props => (
            this.state.usuario ? <Home /> : <Redirect to="/login" />
          )} />

          <Route path="/login" render={props => (
            <Login onEnviarClick={this.logaUsuario} />
          )} />
          
          <Route path="/conta" component={Conta} />
          <Route path="/contato" component={Contato} />
          <Route path="/quem-somos" component={QuemSomos} />
          <Route component={NaoEncontrada} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)