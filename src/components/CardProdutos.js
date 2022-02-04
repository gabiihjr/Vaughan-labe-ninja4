import React, { Component } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { labeninjasURL, key } from '../constants/labeninjasAPI';
import PaginaDetalhes from '../pages/PaginaDetalhes';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ProductContainer, Cabecalho, Container, Rodandinho} from './styled-cardprodutos'

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
  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = () => {

    const url = `${labeninjasURL}/jobs`;
    const axiosConfig = { headers: { Authorization: key } }

    Axios
      .get(url, axiosConfig)
      .then(res => {
        this.setState({ jobs: res.data.jobs })
      })
      .catch(err => alert(err))
  }

  onClickToDetail = (idProduto) => {
    this.setState({
      idJob: idProduto,
      toDetalhes: false,
    })
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
      return servico.title.toLowerCase().includes(this.state.filtroBuscaPorNome.toLowerCase())
    }))
      .sort((a, b) => {
        if (this.state.ordenacao === "Crescente") {
          return a.price - b.price;
        } else if (this.state.ordenacao === "Decrescente") {
          return b.price - a.price;
        }
        else if (this.state.ordenacao === "Titulo") {
          return a.title.localeCompare(b.title)
        }
        else if (this.state.ordenacao === "Prazo") {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        }
      })
      .map(item =>
        <ProductContainer
          key={item.id}>
          <p>{item.title}</p>
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

        </Cabecalho>

        <Container>

          {productsToScreen.length > 0 ?
          this.state.toDetalhes ? productsToScreen :
            <PaginaDetalhes
              idJob={this.state.idJob}
              onClickToReturn={this.onClickToReturn}
              produtosNoCarrinho={this.props.produtosNoCarrinho}
              jobs={this.state.jobs}
              pegarIdProduto={this.pegarIdProduto}
              onClickToCard={this.props.onClickToCard}
              getAllJobs={this.getAllJobs}
            /> : <Rodandinho />  }

        </Container>
      </div>
    )
  }
}