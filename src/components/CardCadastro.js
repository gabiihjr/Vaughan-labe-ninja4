import React, { Component } from 'react'
import axios from 'axios'
import { key } from '../constants/labeninjasAPI'


export class CardCadastro extends Component {
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
          <input required value={this.state.inputTitle} onChange={this.handleInputTitle} placeholder="Título *" type="text" />
          <input required value={this.state.inputDescription} onChange={this.handleInputDescription} placeholder="Descrição *" type="text"  />
          <input required value={this.state.price} onChange={this.handleInputPrice} placeholder="R$" />
          <select required value={this.state.inputPayment} onChange={this.handleInputPayment}>
              <option value="" selected>Selecionar...</option>
              <option value="pix">Pix</option>
              <option value="cartaocredito">Cartão de crédito</option>
              <option value="cartaodebito">Cartão de Débito</option>
              <option value="boleto">Boleto</option>
          </select>
          <input required value={this.state.inputDate} onChange={this.handleInputDate} type="date" name="dueDate" required />
          <button onClick={this.createJob}>Cadastrar</button>
        </form>
        
      </div>
    )
  }
}