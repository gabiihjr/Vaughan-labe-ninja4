import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Filtros } from './components/Filtros'
import PaginaCarrinho from './pages/PaginaCarrinho'
import PaginaListagem from './pages/PaginaListagem';
import CardProdutos from './components/CardProdutos';

import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { theme } from './constants/Tema';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
	}
	body {
		background-color: #F5F4FC;
	}
`

class App extends React.Component {


     //! Data que vem  Api getAllJobs la do cardproduto. 
     gettingDataAPP = (dataJobs) => { 
		 console.log('gettingDataAPP',dataJobs)

	 }


	render() {
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Button>Contratar serviço</Button>
				<Button>Seja um ninja</Button>
				 <PaginaListagem gettingDataAPP={this.gettingDataAPP} />
              
			</ThemeProvider>
		)
	}
}

export default App
