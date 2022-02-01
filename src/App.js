import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Filtros } from './components/Filtros'
import PaginaCarrinho from './pages/PaginaCarrinho'
import PaginaListagem from './pages/PaginaListagem';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { theme } from './constants/Tema';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
	}
	body {
		background-color: #F5F4FC;
	}
`

const BotaoTeste = styled.button`
	background-color: #7867BF;
	padding: 30px;
	border: 1px solid black;
	:hover{
		background-color: #b9a8ff;
	}
`

class App extends React.Component {
	render () {
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Filtros />
				<Button variant="contained" color="primary">TESTE LALALA</Button>
			</ThemeProvider>
		)
	}
}

export default App
