import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { CardContainer } from './styled-cardcarrinho';

export default class CardCarrinho extends Component {
  render() {
    return (
      <CardContainer key={this.props.itemCarrinho.id}>
        <p>{this.props.itemCarrinho.title}</p>
        <p>R${this.props.itemCarrinho.price},00</p>
        <Button onClick={() => {
          if (window.confirm(`Tem certeza que deseja retirar este serviço do carrinho?`)) {
            return this.props.removerDoCarrinho(this.props.itemCarrinho.id)
          }
        }
        }><DeleteIcon color="secondary" /></Button>
      </CardContainer>
    )
  }
}