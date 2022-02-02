import React, { Component } from 'react'
import CardProdutos from '../components/CardProdutos';



export default class PaginaListagem extends Component {


  gettingDataPaginaListagem = (dataJobs) =>  { 
    console.log(' gettingDataPaginaListagem',  dataJobs)
  }



  render() {



    return (
      <div>
        <p>Página de listagem!</p>

        {/* retirar o true  */}
        <CardProdutos 
        gettingDataAPP={this.props.gettingDataAPP}
        gettingDataPaginaListagem={this.gettingDataPaginaListagem}
        
        />
      </div>
    )
  }
}