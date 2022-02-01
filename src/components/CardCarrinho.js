import React, { Component } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
        <p>Produto</p>
        <p>Valor</p>
        <button>Excluir</button>
      </CardContainer>
    )
  }
}