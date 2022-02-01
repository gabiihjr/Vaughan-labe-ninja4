import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Filtros } from './components/Filtros'
import PaginaCarrinho from './pages/PaginaCarrinho'
import PaginaListagem from './pages/PaginaListagem';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
	}
`


class App extends React.Component {
	render () {
		return (
			<div>
				<GlobalStyle />
				<Filtros />
				
			</div>
		)
	}
}

export default App
