import React from "react";
import Button from '@material-ui/core/Button';
import { Cabeçalho, ShoppingCartOutlinedIconStyled, HomeOutlinedIconStyled} from './styled-header';

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Cabeçalho>
                    <Button onClick={this.props.mudarParaHome}>
                        <HomeOutlinedIconStyled color="secondary" />
                    </Button>
                    <h1>LabeNinjas</h1>
                    <Button onClick={this.props.mudarParaCarrinho}>
                        <ShoppingCartOutlinedIconStyled color="secondary" />
                    </Button>
                </Cabeçalho>
            </div>
        )
    }
}