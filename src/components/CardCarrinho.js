import React, { Component } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  padding: 20px;
  width: 60%;
  margin: 10px;
  p {
    margin: 10px;
  }
  button {
    margin: 10px;
  }
`

export default class CardCarrinho extends Component {
  render() {
    return (
      <CardContainer>
        <p>{this.props.itemCarrinho.title}</p>
        <p>R${this.props.itemCarrinho.price},00</p>
        <button>Excluir</button>
      </CardContainer>
    )
  }
}