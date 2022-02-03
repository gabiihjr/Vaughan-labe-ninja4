import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';


export const Cabeçario = styled.header`
display: flex;
justify-content:space-between;
align-items: center;
background-color: #7867BF;
padding: 20px;
border: solid 1px black;
`



export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Cabeçario>
                    <h1>LabeNinjas</h1>
                    <Button onClick={this.props.mudarParaHome}>Home</Button>
                    <Button onClick={this.props.mudarParaCarrinho}>Carrinho</Button>
                </Cabeçario>
            </div>
        )
    }
}


