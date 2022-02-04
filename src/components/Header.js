import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export const Cabeçario = styled.header`
display: flex;
justify-content:space-between;
align-items: center;
background-color: #7867BF;
padding: 20px;
border: solid 1px black;
height: 60px;
color: #F5F4FC;

@media(max-width:360px ){ 
    padding: 0;
    h1{ 
        font-size: 1.5rem;
    }
}
`



export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Cabeçario>
                    <Button onClick={this.props.mudarParaHome}>Home</Button>
                    <h1>LabeNinjas</h1>
                        <Button onClick={this.props.mudarParaCarrinho}> <AddShoppingCartIcon /></Button>
                </Cabeçario>
            </div>
        )
    }
}


