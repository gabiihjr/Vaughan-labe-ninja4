import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { labeninjasURL, key } from '../constants/labeninjasAPI';
import Axios from 'axios';
import { red } from '@material-ui/core/colors';

const ButtonAdd = styled(Button)`
 &&{ 
   width: 100%;
 }

`
const ButtonVoltar = styled(Button)`
 &&{ 
   width: 100%;
 }
`
const ButtonsDiv = styled.div`
width: 100%;

@media (max-width: 480px) {
  width: 100%;
  display: flex;
  }

`

const PaginaDetalhesDiv = styled.div`
box-shadow: 2px 1px 5px #f4f2fa;
margin: 10% auto;
width: 70vw;
max-width: 500px;
grid-column: 1/-1;
display: flex;
background-color: #dad1ff;
flex-direction: column;
align-items: center;
justify-content: center;
text-align:center;
border-radius: 5px;
box-sizing: border-box;

p:first-child{ 
  margin:1rem 1rem;
  font-size: 1.5rem;
  color:#7867BF;
}

p { 
  margin: 10px;
   
}

  @media (max-width: 680px) {
    margin-top: 40%

  }
  
`

export default class PaginaDetalhes extends Component {

  state = {
    job: '',
    paymentMethods: [],
    dueDate: '',
    price: '',
    produtosNoCarrinho: [],
  }

  componentDidMount() {
    this.getJobByID(this.props.idJob)
  }

  getJobByID = (idJob) => {
    const url = `${labeninjasURL}/jobs/${this.props.idJob}`;
    const axiosConfig = { headers: { Authorization: key } }

    Axios
      .get(url, axiosConfig)
      .then(res => {
        this.setState({
          job: res.data,
          paymentMethods: res.data.paymentMethods,
          dueDate: res.data.dueDate,
          price: res.data.price,
        })

      })
      .catch(err => console.log(err))
  }

  deleteJob = (idJob) => {
    const url = `${labeninjasURL}/jobs/${this.props.idJob}`
    const axiosConfig = { headers: { Authorization: key } }

    Axios
    .delete(url, axiosConfig)
    .then(response => {
      alert("Serviço deletado com sucesso!")
      this.props.onClickToReturn()
      this.props.getAllJobs()
      
    })
    .catch(error => console.log(error))
  }


  render() {

    return (
      <PaginaDetalhesDiv>

        <p>{this.state.job.title}</p>
        
        {this.state.paymentMethods.map(item => <span key={item}>{item}</span>)}

        <p>{(this.state.price).toLocaleString('pt-BR',
          { style: 'currency', currency: 'BRL' })

        }</p>
        {this.state.dueDate ? <p>{new Date(this.state.dueDate).toLocaleDateString()}</p> : "Carregando..."}
        <p>{this.state.job.description}</p>
        <ButtonsDiv>
        <ButtonAdd size="large" variant="contained" color="primary" 
        onClick={() => this.props.onClickToCard(this.props.jobs, this.props.idJob)}
        >ADD</ButtonAdd>
        <ButtonVoltar size="large" variant="contained" color="secondary" 
        onClick={this.props.onClickToReturn}>Voltar</ButtonVoltar>
        </ButtonsDiv>
        <Button onClick={() => this.deleteJob(this.props.idJob)}>DELETE</Button>
      </PaginaDetalhesDiv >
    )
  }
}