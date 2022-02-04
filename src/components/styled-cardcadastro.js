import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
  color: #4A4A4A;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  text-align: left;
  margin: 2% 30%;
  h2 {
    align-self: center;
    font-size: 2rem;
  }
`

export const Pagamento = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 2% 0;
    text-align: left;
    color: #6e6e6e;
  }
`
export const Form = styled.form` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3%;
`

export const Checkbox = styled.div` 
  text-align: left;
`
export const P = styled.p` 
  margin-top: 2%;
  color: #6e6e6e;
`
