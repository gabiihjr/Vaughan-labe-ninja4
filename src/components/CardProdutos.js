import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PaginaCarrinho from '../pages/PaginaCarrinho'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { labeninjasURL, key } from '../constants/labeninjasAPI';
import PaginaDetalhes from '../pages/PaginaDetalhes';
import { Filtros } from './Filtros';
import { TextField } from '@material-ui/core';


const Cabecalho = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


`




const ProductContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 0 1px 5px #f4f2fae7;
padding:1rem 1rem 1rem 1rem;
background-color: #dad1ff;
border-radius: 5px;
box-sizing: border-box;

p:first-child { 
  margin:1rem 1rem;
  font-size: 1.5rem;
  color:#7867BF;
  text-transform: capitalize; 

} 

>div{ 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 90%;
  background-color: #dad1ff;
  padding: 0.2rem  0.25rem ;
}
button{ 
  background-color: #dad1ff;
  color:#7867BF;
  border:none;
  border-radius:5px;
  :hover {
      background-color: #483d72;
      filter: brightness(90%);
      cursor: pointer;
  }
}
`

const Container = styled.div`
/* flex-wrap: wrap; */
display: grid;
grid-template-columns:repeat(4, 1fr) ;
gap:1rem;
width: 100%;
padding: 0 2rem;
box-sizing: border-box;
`

export default class CardProdutos extends Component {
  state = {
    jobs: [],
    toDetalhes: true,
    idJob: '',
    produtosNoCarrinho: [],
    filtroMaximo: "",
    filtroMinimo: "",
    filtroBuscaPorNome: "",
    ordenacao: "Crescente"
  }

  data = [];
  componentDidMount(data) {
    this.getAllJobs();
  }

  getAllJobs = () => {

    const url = `${labeninjasURL}/jobs`;
    const axiosConfig = { headers: { Authorization: key } }


    Axios
      .get(url, axiosConfig)
      .then(res => {
        console.log(res.data.jobs)
        this.setState({ jobs: res.data.jobs })
        this.props.gettingDataAPP(res.data.jobs)
        this.props.gettingDataPaginaListagem(res.data.jobs)

      })
      .catch(err => console.log(err))

  }

  onClickToDetail = (idProduto) => {
    console.log('Ver Detalhes', idProduto)
    this.setState({
      idJob: idProduto,
      toDetalhes: false,

    })

    // Clicando Abre Pagina Detalhes


  }

  mudarOrdem = (event) =>{
    this.setState({
      ordenacao: event.target.value
    })

  }

  onClickToReturn = () => {
    this.setState({
      toDetalhes: true,
    })

  }

  EventoMinimo = (event) => {
    this.setState({
      filtroMinimo: event.target.value
    })
  }

  EventoMaximo = (event) => {
    this.setState({
      filtroMaximo: event.target.value
    })
  }

  EventoBuscaPornome = (event) => {
    console.log(event)
    this.setState({
      filtroBuscaPorNome: event.target.value

    })
  }

  render() {


    const productsToScreen = this.state.jobs.filter(servico => {
      if (this.state.filtroMinimo) {
        return servico.price >= this.state.filtroMinimo
      }
      else {
        return servico
      }
    }).filter(servico => {
      if (this.state.filtroMaximo) {
        return servico.price <= this.state.filtroMaximo
      } else {

        return servico

      }
    }).filter((servico => {
      return servico.title.toLowerCase().includes(this.state.filtroBuscaPorNome.toLowerCase()) //Ele vai pegar e transformar em minusculo
    }))
    .sort((a, b) => {
        if (this.state.ordenacao === "Crescente") {
          return a.price - b.price;
        } else if(this.state.ordenacao === "Decrescente") {
          return b.price - a.price;
         }
        else if(this.state.ordenacao === "Titulo"){
          return a.title.localeCompare(b.title)   //localeCompare compara duas strings 
        }
        else if(this.state.ordenacao === "Prazo"){
          return new Date( a.dueDate).getTime()- new Date(b.dueDate).getTime(); //Ele transforma para milissegundos
        }
     })       //a = primeiroProduto e b  próximo produto
    .map(item =>
      <ProductContainer
        key={item.id}>
        <p>{item.title}</p>
        {/* A data Ta errada mes a menos  */}
        <p>Até {(new Date(item.dueDate)).toLocaleDateString()}
          &nbsp; por  <strong>{(item.price).toLocaleString('pt-BR',
            { style: 'currency', currency: 'BRL' })}</strong></p>
        <div> <Button variant="text" color="primary"
          onClick={() => this.onClickToDetail(item.id)} >
          VER DETALHES </Button>
          <Button onClick={() => this.props.onClickToCard(this.state.jobs,item.id)}>
            <AddShoppingCartIcon />
          </Button>
        </div>
      </ProductContainer>)



    return (
      <div>

<TextField>
        
        <h3>Valor Mínimo</h3>
        <input 
        placeholder='Valor Mínimo'
        type = "number"
        value = {this.state.filtroMinimo}
        onChange={ this.EventoMinimo}
        />

        <h3>Valor Máximo</h3>
        <input  
        placeholder='Valor Máximo'
        type = "number"
        value = {this.state.filtroMaximo}
        onChange={ this.EventoMaximo}
        />

        <h3>Busca por nome</h3>
        <input
        placeholder='Busca por título ou descrição'
        type = "text"
        value = {this.state.filtroBuscaPorNome} //Sempre
        onChange={this.EventoBuscaPornome}
          
        />
          <h3>Ordenação</h3>
           <select   value = {this.state.ordenacao}  onChange ={this.mudarOrdem}>     
          <option value={"Crescente"}>Preço Crescente</option>
          <option value={"Decrescente"}>Preço Decrescente</option>
          <option value={"Titulo"}>Titulo</option>
          <option value={"Prazo"}>Prazo</option>
          </select>
    </TextField>
        {/* {this.state.toDetalhes &&
          <Filtros servicosMapeados={this.productsToScreen}
            EventoBuscaPornome={this.EventoBuscaPornome}
            EventoMinimo={this.EventoMinimo}
            EventoMaximo={this.EventoMaximo}

          />} */}

        <Container>

          {this.state.toDetalhes ? productsToScreen :
            <PaginaDetalhes
              idJob={this.state.idJob}
              onClickToReturn={this.onClickToReturn}
              produtosNoCarrinho={this.props.produtosNoCarrinho}
              jobs={this.state.jobs}
              pegarIdProduto={this.pegarIdProduto}
              onClickToCard={this.props.onClickToCard}
            />}
        </Container>
      </div>
    )
  }
}