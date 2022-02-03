import React, { Component } from 'react';
import CardCarrinho from '../components/CardCarrinho';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CarrinhoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  h1{
    margin: 10px;
  }
  h3 {
    margin: 10px;
  }
`

export default class PaginaCarrinho extends Component {

  componentDidUpdate() {
    const carrinhoString = JSON.stringify(this.props.produtosNoCarrinho)
    localStorage.setItem("Produtos no Carrinho", carrinhoString)
  }

  componentDidMount() {
    JSON.parse(localStorage.getItem("Produtos no Carrinho"))
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
        <Button variant="contained" color="primary" onClick={this.props.mudarParaLista}> Voltar para lista </Button>
        {this.props.produtosNoCarrinho.map((item) => {
          return <CardCarrinho itemCarrinho={item}
            removerDoCarrinho={this.props.removerDoCarrinho} />
        })}
        <h3>Total: R$ {this.calcularTotal()}.00</h3>
        <Button variant="contained" color="primary" onClick={this.alertaDeCompra}>Contratar serviços</Button>
      </CarrinhoContainer>
    )
  }
}