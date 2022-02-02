import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PaginaCarrinho from '../pages/PaginaCarrinho'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { labeninjasURL, key } from '../constants/labeninjasAPI';
import PaginaDetalhes from '../pages/PaginaDetalhes';




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
    idJob:'',
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

  state = {
    produtosNoCarrinho: []
  }

  onClickToDetail = (idProduto) => {
    console.log('Ver Detalhes', idProduto)
    this.setState ({
      idJob: idProduto,
      toDetalhes: false,

    }) 

    // Clicando Abre Pagina Detalhes


  }

  onClickToCard = (idProduto) => {
    console.log('Carrinho', idProduto)
    this.setState({
     
    })

  }


  render() {


    const productsToScreen = this.state.jobs.map(item =>
      <ProductContainer
        key={item.id}>
        <p>{item.title}</p>
        {/* A data Ta errada mes a menos  */}
        <p>Até {(new Date(item.dueDate)).toLocaleDateString()}
          &nbsp; por  <strong>{(item.price).toLocaleString('pt-BR',
            { style: 'currency', currency: 'BRL' })}</strong></p>
        <div> <Button variant="text" color="primary"
          onClick={() => this.onClickToDetail( item.id)} >
          VER DETALHES </Button>
          <Button onClick={() => this.onClickToCard( item.id)}>
            <AddShoppingCartIcon />
          </Button>
        </div>
      </ProductContainer>)

    return (
      <Container>

        {productsToScreen}
        {/* <PaginaCarrinho produtosNoCarrinho = {this.state.produtosNoCarrinho}/> */}

        {this.state.toDetalhes ? productsToScreen :<PaginaDetalhes idJob ={this.state.idJob}/>}

      </Container>
    )
  }
}