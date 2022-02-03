import React from 'react';
import Button from '@material-ui/core/Button';
import imagemLogo from '../images/labeninjasImagem.png'
import imagemCategorias from '../images/categoriasninjas.png'

import styled from "styled-components";

export const EstiloHome = styled.div`
    background-color: #f3f3fb;
   // width: 100vw;
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
   // height: 100vh;
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
`

export const HomeButton = styled.div`
margin: 35px;
//margin-top: 60px;
display: flex;
justify-content: space-around;
width: 50vw;
button{
  width  : 300px 
}
`

export default class Home extends React.Component {
    render () {
        return (
            <EstiloHome>
            <HomeButton>
                <Button variant="contained" color="primary" onClick={this.props.mudarParaLista}>Contratar serviço</Button>
				<Button variant="contained" color="primary" onClick={this.props.mudarParaCadastro}>Cadastrar</Button>
            </HomeButton>

            <div>
                <img src={imagemLogo} alt="labeninjasImagem" ></img>
            </div>
            <EstiloTexto>
            <h1>O que é o Labeninjas?</h1>
<p>
Labeninjas é a ponte entre o seu problema e a resolução dele. Te conectamos com profissionais para todo tipo de necessidade. São profissionais de todo brasil para te atender com qualidade e facilidade.
</p>
            </EstiloTexto>
          

            </EstiloHome>
        )
    }
}