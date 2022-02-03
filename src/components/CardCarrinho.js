import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { purple } from '@material-ui/core/colors';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7867BF;
  color: white;
  padding: 20px;
  margin: 10px;
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
      <div>
        <CardContainer>
        <p>{this.props.itemCarrinho.title}</p>
        <p>R${this.props.itemCarrinho.price},00</p>
        <Button onClick={() => this.props.removerDoCarrinho(this.props.itemCarrinho.id)}><DeleteIcon color="secondary" /></Button>
      </CardContainer>
      </div>
    )
  }
}