import React from 'react';
import Button from '@material-ui/core/Button';
import imagemLogo from '../images/labeninjasImagem.png'
import imagemCategorias from '../images/categoriasninjas.png'

import styled from "styled-components";

export const EstiloHome = styled.div`
    background-color: #f3f3fb;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: 'blue'  

`
export const EstiloTexto = styled.div`
    background-color: #f3f3fb;
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export default class Home extends React.Component {
    render () {
        return (
            <EstiloHome>
            <div>
                <Button onClick={this.props.mudarParaLista}>Contratar serviço</Button>
				<Button onClick={this.props.mudarParaCadastro}>Cadastrar</Button>
            </div>

            <div>
                <img src={imagemLogo} alt="labeninjasImagem" ></img>
            </div>
            <EstiloTexto>
            <h1>O que é o Labeninjas?</h1>
<p>
Labeninjas é a ponte entre o seu problema e a resolução dele. Te conectamos com profissionais para todo tipo de necessidade. Sao profissionais de todo brasil para te atender com qualidade e facilidade.
</p>
            </EstiloTexto>
            <div>
                <img src={imagemCategorias} alt="imagemCategorias" ></img>
            </div>

            </EstiloHome>
        )
    }
}