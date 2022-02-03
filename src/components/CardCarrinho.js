import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7867BF;
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: .5em;
  width: 400px;
  height: 100px;
  p {
    margin: 10px;
    text-transform: capitalize;
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
        <Button onClick={() => this.props.removerDoCarrinho(this.props.itemCarrinho.id)}><DeleteIcon color="secondary" /></Button>
      </CardContainer>
    )
  }
}