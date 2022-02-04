import React, { Component } from 'react';
import axios from 'axios';
import { key } from '../constants/labeninjasAPI';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ContainerPrincipal, Pagamento, Form, Checkbox, P } from './styled-cardcadastro';

export default class CardCadastro extends Component {
  state = {
    inputTitle: "",
    inputDescription: "",
    inputPrice: "",
    inputPayment: [],
    inputDate: ""
  }

  handleInputTitle = (event) => {
    this.setState({ inputTitle: event.target.value })
  }

  handleInputDescription = (event) => {
    this.setState({ inputDescription: event.target.value })
  }

  handleInputPrice = (event) => {
    this.setState({ inputPrice: event.target.value })
  }

  handleInputPayment = (event) => {
    const newPayment = [...this.state.inputPayment]
    newPayment.push(event.target.value)
    this.setState({ inputPayment: newPayment })
  }

  handleInputDate = (event) => {
    this.setState({ inputDate: event.target.value })
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
    const auth = { headers: { Authorization: key } }
    axios.post(url, body, auth)
      .then((response) => {
        alert(response.data.message)
        this.setState({ inputTitle: "",
        inputDescription: "",
        inputPrice: "",
        inputPayment: [],
        inputDate: ""})
      })
      .catch((error) => alert(error))
    event.preventDefault()
  }

  render() {
    return (
      <ContainerPrincipal>
        <h2>Cadastre o seu serviço</h2>

        <>
          <TextField
            required
            id="standard-required"
            label="Título do Serviço"
            defaultValue=""
            variant="standard"
            size="small"
            value={this.state.inputTitle}
            onChange={this.handleInputTitle}
          />
        </>

        <>
          <TextField
            required
            id="standard-required"
            label="Descrição do serviço"
            defaultValue=""
            multiline
            maxRows={5}
            variant="standard"
            size="small"
            value={this.state.inputDescription}
            onChange={this.handleInputDescription}
          />
        </>

        <>
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
        </>

        <Pagamento>
          <p>Formas de Pagamento</p>
         
          <Form value={this.state.inputPayment} onChange={this.handleInputPayment}>
            <Checkbox>
              <input
                type="checkbox"
                id="pix"
                name="Pix"
                value="Pix"
              />
              <label for="pix"> Pix</label>
            </Checkbox>
            
            
            <Checkbox>
            <input
              type="checkbox"
              id="cartaocredito"
              name="Cartão de Crédito"
              value="Cartão de Crédito"
            />
            <label for="cartaocredito"> Cartão de Crédito</label>
            </Checkbox>
            
            <Checkbox>
            <input
              type="checkbox"
              id="cartaodebito"
              name="Cartão de Débito"
              value="Cartão de Débito"
            />
            <label for="cartaodebito"> Cartão de Débito</label>
            </Checkbox>
            
            <Checkbox>
            <input
              type="checkbox"
              id="boleto"
              name="Boleto"
              value="Boleto"
            />
            <label for="boleto"> Boleto</label>
            </Checkbox>
            
          </Form>
          <hr/>
        </Pagamento>

        <>
          <P>Estou disponível para fazer o serviço até</P>
          <TextField
            id="date"
            label="Escolha uma data"
            type="date"
            defaultValue={Date.now()}
            InputLabelProps={{
              shrink: true,
            }}
            required
            value={this.state.inputDate}
            onChange={this.handleInputDate}
          />
        </>

        <Button variant="contained" color="primary" onClick={this.createJob}>Cadastrar</Button>

      </ContainerPrincipal>
    )
  }
}