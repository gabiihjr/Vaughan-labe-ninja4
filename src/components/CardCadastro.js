import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35%;
  max-height: 100vh;
  transform: translateX(-50%);
  position: relative;
  margin-left: 50%;
  margin-top: 100px;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TituloRoxo = styled.h2`
  color: #7867BF;
  font-size: 2rem;
`
const Form = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`

const InputA = styled.input`
  border: solid 1px #7867BF;
  display: block;
  justify-self: center;
  margin: 2% 0;
  width: 101%;
  padding: 0.5em 0  0.5em 0.75em;
  font-size: 1rem;
  border-radius: 5px;
`
const InputB = styled.input`
  border: none;
  width: 95%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
`

const FieldsetPagamento = styled.fieldset`
  border: solid 1px #7867BF;
  legend {
    font-size: 1rem;
  }
  margin-bottom: 2%;
  width: 98%;
  font-size: 1.1rem;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-row-gap: 3%;
  border-radius: 5px;

`
const Checkbox = styled.input`
  margin-right: 7px;
  border: 1px solid #7867BF;
  width: 15px;
  height: 20px;

  :hover {
    cursor: pointer;
    border: solid 2px #7867BF;
  }
  /* TENTATIVA DE MUDAR A COR DO CHECKBOX
  :after {
    content: " ";
    background-color: #7867BF;
    display: inline-block;
    visibility: visible;
  }
  :checked:after {
    content: "\2714";
    box-shadow: 0px 2px 4px rgba(155, 155, 155, 0.15);
    border-radius: 3px;
    height: 12px;
    display: block;
    width: 12px;
    text-align: center;
    font-size: 9px;
    color: white;
  } */
`

const Fieldset = styled.fieldset`
  border: solid 1px #7867BF;
  legend {
    font-size: 1rem;
  }
  margin-bottom: 2%;
  width: 98%;
  font-size: 1.1rem;
  border-radius: 5px;
`

const BotaoCadastrar = styled.button`
  width: 496px;
  margin-top: 2%;
  height: 2rem;
  font-size: 1.4rem;
  background-color: #7867BF;
  border: 1.5px #483d72 outset;
  color: #F4F4FC;
  border-radius: 5px;
  :hover {
      /* background-color: #483d72; */
      filter: brightness(90%);
      cursor: pointer;
  }
`

export class CardCadastro extends Component {
  render() {
    return (
      <Container>
        <TituloRoxo>Cadastre o seu serviço</TituloRoxo>
        <Form>
          <InputA placeholder="Título *" type="text" name="title" required />

          <InputA placeholder="Descrição *" type="text" name="description" required />

          <Fieldset>
            <legend>Preço *</legend>
            <InputB placeholder="R$" type="number" name="price" required />
          </Fieldset>

          <FieldsetPagamento>
            <legend>Formas de pagamento</legend>
            <div>
              <Checkbox type="checkbox" id="cartaocredito" />
              <label for="cartaocredito">Cartão de Crédito</label>
            </div>

            <div>
              <Checkbox type="checkbox" id="cartaodebito" />
              <label for="cartaodebito">Cartão de Débito</label>
            </div>

            <div>
              <Checkbox type="checkbox" id="pix" />
              <label for="pix">Pix</label>
            </div>

            <div>
              <Checkbox type="checkbox" id="boleto" />
              <label for="boleto">Boleto</label>
            </div>
          </FieldsetPagamento>

          <Fieldset>
            <legend>Prazo *</legend>
            <InputB type="date" name="price" required />
          </Fieldset>

          <BotaoCadastrar>Cadastrar</BotaoCadastrar>
        </Form>
      </Container>
    )
  }
}