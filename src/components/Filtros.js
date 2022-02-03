import React, { Component } from 'react'
import styled from 'styled-components'


const Cabecalho = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


`





export class Filtros extends Component {
 
 
  render() {
  
    
    
   


    return (
      <Cabecalho>
        
          <h3>Valor Mínimo</h3>
          <input 
          placeholder='Valor Mínimo'
          type = "number"
          onChange={ this.props.EventoMinimo}
          />

      

        
          <h3>Valor Máximo</h3>
          <input  
          placeholder='Valor Máximo'
          type = "number"
          onChange={ this.props.EventoMaximo}
          />
       

        
          <h3>Busca por nome</h3>
          <input
          placeholder='Busca por título ou descrição'
          type = "text"
          onChange={this.props.EventoBuscaPornome}
            
          />
            
        
            <h3>Ordenação</h3>
             <select>     
            <option value={"Crescente"}>Preço Crescente</option>
            <option value={"Decrescente"}>Preço Decrescente</option>
            <option value={"Decrescente"}>Titulo</option>
            <option value={"Decrescente"}>Prazo</option>
              
           
            
            </select>

          


       



      </Cabecalho>
    )
  }
}