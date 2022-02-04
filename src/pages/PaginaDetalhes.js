import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { labeninjasURL, key } from '../constants/labeninjasAPI';
import Axios from 'axios';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { ButtonAdd, ButtonVoltar, ButtonsDiv, PaginaDetalhesDiv, TituloEDelete, ButtonDelete } from './styled-paginadetalhes';

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
      .catch(err => alert(err.res.data))
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
      .catch(error => alert(error))
  }

  render() {

    return (
      <PaginaDetalhesDiv>

        <TituloEDelete><p>{this.state.job.title} </p><ButtonDelete
          onClick={() => {
            if (window.confirm(`Tem certeza que deseja deletar esse serviço?`)) {
              return this.deleteJob(this.props.idJob)
            }
          }
          }
        ><DeleteOutlineIcon /> </ButtonDelete></TituloEDelete>

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
      </PaginaDetalhesDiv >
    )
  }
}