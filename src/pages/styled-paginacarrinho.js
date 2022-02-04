import styled from 'styled-components';

export const CarrinhoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  grid-template-rows: 1fr, 1fr, 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  margin: 10px;
  h1{
    margin: 10px;
  }
  h3 {
    margin: 10px;
  }
`

export const Cards = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const Total = styled.div`
  grid-area: 3 / 2 / 4 / 3;
`

export const Titulo = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`

export const CarrinhoVazio = styled.p`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px; 
  background-color: #7867BF;
  color: white;
  padding: 20px;
  border-radius: .5em;
  width: 400px;
  height: 100px;
`