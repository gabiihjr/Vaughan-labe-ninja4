import React, { Component } from 'react'
import CardProdutos from '../components/CardProdutos';



export default class PaginaListagem extends Component {
  render() {
    return (
      <div>
        <p>Página de listagem!</p>
        { true || <CardProdutos/>}

      </div>
    )
  }
}