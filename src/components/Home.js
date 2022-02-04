import React from 'react';
import Button from '@material-ui/core/Button';
import imagemLogo from '../images/labeninjasImagem.png'
import {EstiloHome, EstiloTexto, HomeButton} from './styled-home'

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
                    Labeninjas é a ponte entre o seu problema e a resolução dele. 
                    Te conectamos com profissionais para todo tipo de necessidade. 
                    São profissionais de todo brasil para te atender com qualidade e facilidade.
                </p>
            </EstiloTexto>
          
            </EstiloHome>
        )
    }
}