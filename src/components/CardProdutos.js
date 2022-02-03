import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { labeninjasURL, key } from '../constants/labeninjasAPI';
import PaginaDetalhes from '../pages/PaginaDetalhes';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





const Cabecalho = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 10px;

@media ( max-width:1100px){ 
h3 { 
  display: none;
  justify-content: space-around;
}
input , select { 
  width: 230px;
  margin: 0 15px;
}
}

@media ( max-width: 720px){ 
  display: grid;
 
  input , select { 
  width: 230px;
  margin: 5px 10%;
  box-sizing: border-box;
  }
}
`

const ProductContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
text-align:center;
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
  display: grid;
  grid-template-columns:repeat(4, 1fr) ;
  gap:1rem;
  width: 100%;
  margin-top: 5%;
  padding: 0 2rem;
  box-sizing: border-box;

  @media (max-width: 900px) {
  grid-template-columns:repeat(3, 1fr) ;
  }
  
  @media (max-width: 680px) {
  grid-template-columns:repeat(2, 1fr) ;
  }
  @media (max-width: 480px) {
  grid-template-columns:1fr ;
  }

`

export default class CardProdutos extends Component {
  state = {
    jobs: [],
    toDetalhes: true,
    idJob: '',
    filtroMaximo: "",
    filtroMinimo: "",
    filtroBuscaPorNome: "",
    ordenacao: "Crescente",
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

  mudarOrdem = (event) => {
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
        } else if (this.state.ordenacao === "Decrescente") {
          return b.price - a.price;
        }
        else if (this.state.ordenacao === "Titulo") {
          return a.title.localeCompare(b.title)   //localeCompare compara duas strings 
        }
        else if (this.state.ordenacao === "Prazo") {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(); //Ele transforma para milissegundos
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
            <Button onClick={() => this.props.onClickToCard(this.state.jobs, item.id)}>
              <AddShoppingCartIcon />
            </Button>
          </div>
        </ProductContainer>)



    return (
      <div>

        <Cabecalho>
         

          <TextField
            id="standard"
            label='R$ Valor Mínimo'
            type="number"
            variant="standard"
            value={this.state.filtroMinimo}
            onChange={this.EventoMinimo}
          />


          <TextField
            id="standard"
            variant="standard"
            label='R$ Valor Máximo'
            type="number"
            value={this.state.filtroMaximo}
            onChange={this.EventoMaximo}
          />

          
          <TextField
            id="standard"
            variant="standard"
            label='Busca por título'
            type="text"
            value={this.state.filtroBuscaPorNome} //Sempre
            onChange={this.EventoBuscaPornome}

          />
          


          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Ordenação</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={this.state.ordenacao}
          onChange={this.mudarOrdem}
          label="Ordenação"
        >
          
          <MenuItem value={"Crescente"}>Preço Crescente</MenuItem>
          <MenuItem value={"Decrescente"}>Preço Descrescente</MenuItem>
          <MenuItem value={"Titulo"}>Título</MenuItem>
         <MenuItem value={"Prazo"}>Prazo</MenuItem>
        </Select>
      </FormControl>


          {/* <select value={this.state.ordenacao} onChange={this.mudarOrdem}>
            <option value={"Crescente"}>Preço Crescente</option>
            <option value={"Decrescente"}>Preço Decrescente</option>
            <option value={"Titulo"}>Titulo</option>
            <option value={"Prazo"}>Prazo</option>
          </select> */}
        </Cabecalho>
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