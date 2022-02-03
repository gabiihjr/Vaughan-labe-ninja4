import React, { Component } from 'react';
import CardCarrinho from '../components/CardCarrinho';
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
  display: flex;
  border: 1px solid black;
  background-color: #dad1ff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 10px;
  }
  h3 {
    margin: 10px;
  }
`

export default class PaginaCarrinho extends Component {

  state = {
    carrinhoLocal: []
  }

  componentDidMount() {
    // const carrinhoLocalStorage = JSON.parse(localStorage.getItem("Itens no Carrinho"))
    // const newCarrinho = 
    // console.log(carrinhoLocalStorage)
    this.setState({ carrinhoLocal: this.props.produtosNoCarrinho })
  }

  calcularTotal = () => {
    let valorTotal = 0
    for (let produto of this.props.produtosNoCarrinho) {
      valorTotal += produto.price
    }
    return valorTotal
  }

  alertaDeCompra = () => {
    alert(`Os serviços foram contratados com sucesso!`)
    return this.props.deixarCarrinhoVazio()
  }

  render() {
    console.log("Carrinho local:" + this.props.produtosNoCarrinho)
    return (
      <CarrinhoContainer>
        <h1>Carrinho</h1>
        <button> Voltar para lista </button>
        {this.props.produtosNoCarrinho.map((item) => {
          return <CardCarrinho itemCarrinho={item}
            removerDoCarrinho={this.props.removerDoCarrinho} />
        })}
        <h3>Total: R$ {this.calcularTotal()}.00</h3>
        <button onClick={this.alertaDeCompra}>Contratar serviços</button>
      </CarrinhoContainer>
    )
  }
}