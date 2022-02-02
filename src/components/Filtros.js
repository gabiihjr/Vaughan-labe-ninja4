import React, { Component } from 'react'
import styled from 'styled-components'


const Cabecalho = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


`





export class Filtros extends Component {
   state = {
     filtroMaximo: 0,
     filtroMinimo: 20,
     filtroBuscaPorNome: ""
   }

   EventoMinimo = (event) => {
     this.setState({
       filtroMinimo: event.target.value

     })
   }

   EventoMaximo = (event) => {
    alert("Está funcionando !")
    this.setState({
      filtroMaximo: event.target.value

    })
  }

  EventoBuscaPornome = (event) => {
    this.setState({
      filtroBuscaPorNome: event.target.value
      

    })
  }

  render() {
  
    
    
   


    return (
      <Cabecalho>
        
          <h3>Valor Mínimo</h3>
          <input 
          placeholder='Valor Mínimo'
          type = "number"
          onChange={ this.EventoMinimo}
          />

      

        
          <h3>Valor Máximo</h3>
          <input  
          placeholder='Valor Máximo'
          type = "number"
          onChange={ this.EventoMaximo}
          />
       

        
          <h3>Busca por nome</h3>
          <input
          placeholder='Busca por título ou descrição'
          type = "text"
          onChange={this.EventoBuscaPornome}
            
          />
            
          <label>   

            <h3>Ordenação</h3>
             <select>     
            <option value={"Crescente"}>Preço Crescente</option>
            <option value={"Decrescente"}>Preço Decrescente</option>
            <option value={"Decrescente"}>Titulo</option>
            <option value={"Decrescente"}>Prazo</option>
              
           
            
            </select>

          </label>


       



      </Cabecalho>
    )
  }
}