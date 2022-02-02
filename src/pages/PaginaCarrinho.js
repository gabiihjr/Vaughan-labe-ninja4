import React, { Component } from 'react';
import CardCarrinho from '../components/CardCarrinho';
import styled from 'styled-components';
import Header from '../components/Header';

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

  // componentDidUpdate() {
  //   const itensCarrinhoEmString = JSON.stringify(this.props.produtosNoCarrinho)
  //   localStorage.setItem("Itens no Carrinho", itensCarrinhoEmString);
  // };

  // componentDidMount () {
  //   const carrinhoLocalStorage = JSON.parse(localStorage.getItem("Itens no Carrinho"))
  // }

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