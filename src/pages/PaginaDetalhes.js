import React, { Component } from 'react'; 
import styled from 'styled-components';
import Button  from '@material-ui/core/Button';

import { labeninjasURL, key } from '../constants/labeninjasAPI';
import Axios from 'axios';
import { red } from '@material-ui/core/colors';


const PaginaDetalhesDiv = styled.div`
border: 1px solid black; 
margin: 20% auto;
width: 70vw;
max-width: 500px;
grid-column: 1/-1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p:first-child{ 
  font-size: 2rem; 
}

p { 
  margin: 10px;
}
`

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


export default class PaginaDetalhes extends Component {

  state ={ 
    job: '',
    paymentMethods: [],
    dueDate:'',
    price:'',
  }

  componentDidMount() { 
    this.getJobByID(this.props.idJob)
  }

  getJobByID =(idJob)=> { 
   const url = `${labeninjasURL}/jobs/${this.props.idJob}`; 
   const axiosConfig = { headers: { Authorization: key } }

   Axios
      .get(url,axiosConfig)
      .then(res => {
        this.setState({job : res.data,
         paymentMethods: res.data.paymentMethods,
         dueDate: res.data.dueDate,
         price:res.data.price,
        })

      })
      .catch(err => console.log(err))
  }

  onClickAdd =()=> { 
   console.log("Add clicado")

  }
  

  render() {


    return (
      <PaginaDetalhesDiv>
        <p>{this.state.job.title}</p>
        {/* <p>{this.state.job.paymentMethods.map(item => <>item</>)}</p> */}
       
         {this.state.paymentMethods.map(item => <span key={item}>{item}</span>)}
        
        <p>{(this.state.price).toLocaleString('pt-BR',
            { style: 'currency', currency: 'BRL' })  
        
        }</p>
       { this.state.dueDate ? <p>{new Date(this.state.dueDate).toLocaleDateString()}</p> : "Carregando..." }
        <p>{this.state.job.description}</p>
       
        <ButtonAdd size="large" variant="contained" color="primary" 
        onClick={() => this.onClickAdd('Ver Detalhes',)}
        >ADD</ButtonAdd>
        <ButtonVoltar size="large" variant="contained" color="secondary" 
        onClick={this.props.onClickToReturn}>Voltar</ButtonVoltar>
      </PaginaDetalhesDiv>
    )
  }
}