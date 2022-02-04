import { keyframes } from 'styled-components';
import styled from 'styled-components';

export const Cabecalho = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 10px;

@media ( max-width:1100px){ 
h3 { 
  display: none;
  justify-content: space-around;
}
input , select { 
  width: 230px;
  margin: 0 15px;
}
}

@media ( max-width: 720px){ 
  display: grid;
 
  input , select { 
  width: 230px;
  margin: 5px 10%;
  box-sizing: border-box;
  }
}
`

export const ProductContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
text-align:center;
box-shadow: 0 0 1px 5px #f4f2fae7;
padding:1rem 1rem 1rem 1rem;
background-color: #dad1ff;
border-radius: 5px;
box-sizing: border-box;

p:first-child { 
  margin:1rem 1rem;
  font-size: 1.5rem;
  color:#7867BF;
  text-transform: capitalize; 

}
>div{ 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 90%;
  background-color: #dad1ff;
  padding: 0.2rem  0.25rem ;
}
button{ 
  background-color: #dad1ff;
  color:#7867BF;
  border:none;
  border-radius:5px;
  :hover {
      background-color: #483d72;
      filter: brightness(90%);
      cursor: pointer;
  }
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns:repeat(4, 1fr) ;
  gap:1rem;
  width: 100%;
  margin-top: 5%;
  padding: 0 2rem;
  box-sizing: border-box;

  @media (max-width: 900px) {
  grid-template-columns:repeat(3, 1fr) ;
  }
  
  @media (max-width: 680px) {
  grid-template-columns:repeat(2, 1fr) ;
  }
  @media (max-width: 480px) {
  grid-template-columns:1fr ;
  }
`

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Rodandinho = styled.div`
  grid-column: 2 / 4;
  display: flex;
  width: 100%;
  justify-self: center;
  width: 200px; 
  height: 200px;
  font-size: 2rem;
  border-radius: 50%;
  border-top: 15px solid #4A4A4A;
  animation: ${rotate} 2s linear infinite;
`