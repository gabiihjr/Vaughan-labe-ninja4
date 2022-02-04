import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const ButtonAdd = styled(Button)`
 &&{ 
   width: 100%;
 }

`
export const ButtonVoltar = styled(Button)`
 &&{ 
   width: 100%;
 }
`
export const ButtonsDiv = styled.div`
width: 100%;

@media (max-width: 480px) {
  width: 100%;
  display: flex;
  }

`

export const PaginaDetalhesDiv = styled.div`
box-shadow: 2px 1px 5px #f4f2fa;
margin: 0 auto;
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

export const TituloEDelete = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  button {
    display: flex;
    margin: 10px;
    position: absolute;
    right: 0;
  }
`

export const ButtonDelete = styled(Button)`
 &&{ 
   width: 40px;
 }

`