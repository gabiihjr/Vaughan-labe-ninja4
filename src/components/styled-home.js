import styled from "styled-components";

export const EstiloHome = styled.div`
    background-color: #f3f3fb;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: 'blue'; 

`
export const EstiloTexto = styled.div`
    background-color: #f3f3fb;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #4A4A4A;
    h1{
       margin-bottom: 20px;

    }
    p{
     font-size: 1.2rem;  
    }
     margin-top: 5px;

     @media (max-width:500px){ 
            >p, >h1{ 
                display: none;
            }
    }  
`

export const HomeButton = styled.div`
margin: 35px;
display: flex;
justify-content: space-around;
width: 50vw;
button{
  width: 300px 
}

 @media (max-width:720px){ 
   margin-top:3rem;
 }
 @media (max-width:620px){ 
    margin-top:5rem;
   width: 80%;
 }
 @media (max-width:360px){ 

 >p{ 
     display: none;
 }
 }
`