import React, { Component } from 'react';
import CardCarrinho from '../components/CardCarrinho';
import Button from '@material-ui/core/Button';
import { CarrinhoContainer, Cards, Total, Titulo, CarrinhoVazio } from './styled-paginacarrinho'

export default class PaginaCarrinho extends Component {

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
        <Titulo>
        <h1>Carrinho</h1>
        <Button variant="contained" color="primary" onClick={this.props.mudarParaLista}> Voltar para lista </Button>
        </Titulo>
        {this.props.produtosNoCarrinho.length <= 0 ? <CarrinhoVazio>Carrinho vazio!</CarrinhoVazio> : 
        <><Cards>
        {this.props.produtosNoCarrinho.map((item) => {
          return <CardCarrinho key={item.id} itemCarrinho={item}
            removerDoCarrinho={this.props.removerDoCarrinho} />
        })}
        </Cards>
        <Total>
        <h3>Total: R$ {this.calcularTotal()}.00</h3>
        <Button variant="contained" color="primary" onClick={this.alertaDeCompra}>Contratar serviços</Button>
        </Total></>}
      </CarrinhoContainer>
    )
  }
}