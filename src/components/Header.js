import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


export const Cabeçario = styled.header`
display: flex;
justify-content:space-around;
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

const ShoppingCartOutlinedIconStyled = styled(ShoppingCartOutlinedIcon)`
&& {width:40px;
height: 40px;
}

@media(max-width:720px ){ 
&& {width:50px;
height: 50px;
}
}
@media(max-width:520px ){ 
&& {width:40px;
height: 40px;
}
}
@media(max-width:360px ){ 
&& {width:30px;
height: 30px;
}
}
`

const HomeOutlinedIconStyled = styled(HomeOutlinedIcon)`
&& {width:40px;
height: 40px;
}

@media(max-width:720px ){ 
&& {width:50px;
height: 50px;
}
}
@media(max-width:520px ){ 
&& {width:40px;
height: 40px;
}
}
@media(max-width:360px ){ 
&& {width:30px;
height: 30px;
}
}
`

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Cabeçario>
                    <Button onClick={this.props.mudarParaHome}>
                        <HomeOutlinedIconStyled color="secondary" />
                    </Button>
                    <h1>LabeNinjas</h1>
                    <Button onClick={this.props.mudarParaCarrinho}>
                        <ShoppingCartOutlinedIconStyled color="secondary" />
                    </Button>
                </Cabeçario>
            </div>
        )
    }
}