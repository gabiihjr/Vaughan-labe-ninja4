import React, { Component } from 'react';
import CardCarrinho from '../components/CardCarrinho';
import styled from 'styled-components';
import Header from '../components/Header';

const CarrinhoContainer = styled.div`
  display: flex;
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
  calcularTotal = () => {
    let valorTotal = 0
    for (let produto of this.props.produtosNoCarrinho) {
      valorTotal += produto.price
    }
    return valorTotal
  }

  render() {
    return (
      <CarrinhoContainer>
        <h1>Header aqui</h1>
        <button> Voltar para lista </button>
        {this.props.produtosNoCarrinho.map((item) => {
      return <CardCarrinho itemCarrinho = {item}/>
      })}
        <h3>Total: R$ {this.calcularTotal()}.00</h3> 
        <button>Contratar serviços</button>
      </CarrinhoContainer>
    )
  }
}