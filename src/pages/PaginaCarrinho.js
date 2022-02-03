import React, { Component } from 'react';
import CardCarrinho from '../components/CardCarrinho';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CarrinhoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  grid-template-rows: 1fr, 1fr, 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  margin: 10px;
  h1{
    margin: 10px;
  }
  h3 {
    margin: 10px;
  }
`

const Cards = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Total = styled.div`
  grid-area: 3 / 2 / 4 / 3;
`

const Titulo = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`

const CarrinhoVazio = styled.p`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px; 
  background-color: #7867BF;
  color: white;
  padding: 20px;
  border-radius: .5em;
  width: 400px;
  height: 100px;
`

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
          return <CardCarrinho itemCarrinho={item}
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