import React from 'react'
import styled , { createGlobalStyle } from 'styled-components'
import { Filtros } from './components/Filtros'
import PaginaCarrinho from './pages/PaginaCarrinho'
import PaginaListagem from './pages/PaginaListagem';
// import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { theme } from './constants/Tema';
// import { CardCadastro } from './components/CardCadastro';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
	}
	body {
		background-color: #F5F4FC;
	}
`

const BotaoTeste = styled(Button)`
	&&{
		/* background-color: #7867BF; */
    margin: 100px 500px;
	padding: 30px;
	border: 10px solid red;
	:hover{
		background-color: #b9a8ff;
	}}`


class App extends React.Component {
	render () {
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Filtros />
				<PaginaListagem/>
				<BotaoTeste variant="contained" color="primary">TESTE LALALA</BotaoTeste>
			</ThemeProvider>
		)
	}
}

export default App
