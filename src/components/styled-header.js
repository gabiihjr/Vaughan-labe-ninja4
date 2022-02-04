import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

export const Cabeçalho = styled.header`
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

export const ShoppingCartOutlinedIconStyled = styled(ShoppingCartOutlinedIcon)`
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

export const HomeOutlinedIconStyled = styled(HomeOutlinedIcon)`
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