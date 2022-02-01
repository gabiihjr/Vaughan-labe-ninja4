import React, { Component } from 'react';
import CardCarrinho from '../components/CardCarrinho';
import styled from 'styled-components';

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
  render() {
    return (
      <CarrinhoContainer>
        <h1>Header aqui</h1>
        <button> Voltar para lista </button>
        <CardCarrinho />
        <h3>Total: R$ 0.00</h3> 
        <button>Contratar serviços</button>
      </CarrinhoContainer>
    )
  }
}