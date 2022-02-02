import React, { Component } from 'react'
import axios from 'axios'
import { key } from '../constants/labeninjasAPI'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


export default class CardCadastro extends Component {
  state = {
      inputTitle: "",
      inputDescription: "",
      inputPrice: "",
      inputPayment: [],
      inputDate: ""
     }


  handleInputTitle = (event) => {
    this.setState({inputTitle: event.target.value})
  }

  handleInputDescription = (event) => {
    this.setState({inputDescription: event.target.value})
  }

  handleInputPrice = (event) => {
    this.setState({inputPrice: event.target.value})
  }

  handleInputPayment = (event) => {
    const newPayment = [...this.state.inputPayment]
    newPayment.push(event.target.value)
    this.setState({inputPayment: newPayment})
  }

  handleInputDate = (event) => {
    this.setState({inputDate: event.target.value})
  }


  createJob = (event) => {
    const url = 'https://labeninjas.herokuapp.com/jobs'
    const body = {
      title: this.state.inputTitle,
      description: this.state.inputDescription,
      price: Number(this.state.inputPrice),
      paymentMethods: this.state.inputPayment,
      dueDate: this.state.inputDate
    }
    console.log(body)
    const auth = { headers: { Authorization: key } }
    axios.post (url, body, auth)
    .then((response) => {
      console.log(response.data.message)
      alert(response.data.message)
    })
    .catch((error) => console.log(error))
    event.preventDefault()
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Cadastre o seu serviço</h2>
        <form>
          <div>
            <TextField
              required
              id="standard-required"
              label="Título do job"
              defaultValue="Título do job"
              variant="standard"
              size="small"
              value={this.state.inputTitle} 
              onChange={this.handleInputTitle}
            />
          </div>

          <div>
            <TextField
              required
              id="standard-required"
              label="Descrição do job"
              defaultValue=""
              multiline
              maxRows={5}
              variant="standard"
              size="small"
              value={this.state.inputDescription} 
              onChange={this.handleInputDescription}
            />
          </div>

          <div>
            <TextField
              required
              id="standard-required"
              label="Valor"
              type="number"
              defaultValue=""
              variant="standard"
              size="small"
              value={this.state.inputPrice} 
              onChange={this.handleInputPrice}
            />
          </div>
          
          <select required value={this.state.inputPayment} onChange={this.handleInputPayment}>
              <option value="" selected>Selecionar...</option>
              <option value="pix">Pix</option>
              <option value="cartaocredito">Cartão de crédito</option>
              <option value="cartaodebito">Cartão de Débito</option>
              <option value="boleto">Boleto</option>
          </select>

          <div>
            <TextField
              id="date"
              label="Aceito fazer o job até"
              type="date"
              defaultValue={Date.now()}
              InputLabelProps={{
                shrink: true,
              }}
              required 
              value={this.state.inputDate} 
              onChange={this.handleInputDate}
            />
          </div>
          
          <Button variant="contained" color="primary" onClick={this.createJob}>Cadastrar</Button>
        </form>
        
      </div>
    )
  }
}