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

export const CssButtons = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Cabeçario>
                <Button onClick={this.props.mudarParaHome}>Home</Button>
                <h1>LabeNinjas</h1>      
                    <CssButtons>
                      
                        <Button onClick={this.props.mudarParaCarrinho}>Carrinho</Button>
                    </CssButtons>
                </Cabeçario>
            </div>
        )
    }
}


