import React from 'react';
import Button from '@material-ui/core/Button';

export default class Home extends React.Component {
    render () {
        return (
            <div>
                <Button onClick={this.props.mudarParaLista}>Contratar serviço</Button>
				<Button onClick={this.props.mudarParaCadastro}>Cadastrar</Button>
            </div>
        )
    }
}