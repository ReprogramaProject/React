import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import loading from './loading.svg'
import * as apiPostit from '../../apis/postit'
import './Home.css'


class Home extends React.Component {
    state = {
        postits: [],
        carregando: true
    }

    componentDidMount() {
        // TODO: buscar lista de postit
        apiPostit.listaPostits()
            .then(resposta => {
                this.setState({
                    postits: resposta.data.notas,
                    carregando: false
                })
            })
            .catch(erro => {
                alert(erro);
            });
    }

    adicionaPostit = (novoPostit) => {
        // TODO: cadastrar postit na API

        apiPostit.adicionaPostit(novoPostit)
            .then(resposta => {
                this.setState(prevState => {
                    novoPostit.id = resposta.data.id
        
                    return {
                        postits: this.state.postits.concat(novoPostit)
                    }
                })
            })
            .catch(erro => {
                alert(erro);
            });
    }

    editaPostit = (postitAlterado) => {
        // TODO: alterar postit na API
        
        this.setState(prevState => {
            return {
                postits: prevState.postits.map(postitAtual => {
                    if (postitAtual.id === postitAlterado.id) {
                        return postitAlterado
                    } else {
                        return postitAtual
                    }
                })
            }
        })
    }

    removePostit = (id) => {
        // TODO: remover postit na API

        this.setState(prevState => {
            return {
                postits: prevState.postits.filter(postitAtual => {
                    return postitAtual.id !== id ? true : false
                })
            }
        })
    }

    render() {
        return (
            <div className="home">
                <Postit
                    onAdicionaClick={this.adicionaPostit}
                    onEditaClick={this.editaPostit}
                    onRemoveClick={this.removePostit}s
                />
    
                <div>
                {
                    this.state.carregando ? (
                        <img 
                            className="home__loading" 
                            src={loading} 
                            alt="Carregando lista de postit" 
                        />
                    ) : (
                        this.state.postits.map(postit => (
                            <Postit 
                                key={postit.id}
                                id={postit.id}
                                titulo={postit.titulo}
                                texto={postit.texto}
                                onAdicionaClick={this.adicionaPostit}
                                onEditaClick={this.editaPostit}
                                onRemoveClick={this.removePostit}
                            />
                        ))
                    )
                }
                </div>
            </div>
        )
    }
}

export default Home