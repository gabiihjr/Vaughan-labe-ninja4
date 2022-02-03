import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Filtros } from './components/Filtros'
import PaginaCarrinho from './pages/PaginaCarrinho'
import PaginaListagem from './pages/PaginaListagem';
import CardProdutos from './components/CardProdutos';
import CardCadastro from './components/CardCadastro'
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
	state = {
		paginaAtual: "home",
		produtosNoCarrinho: []
	}

	mudarParaHome = () => {
		this.setState({ paginaAtual: "home" })
	}

	mudarParaCarrinho = () => {
		this.setState({ paginaAtual: "carrinho" })
	}

	onClickToCard = (  allJobs ,idProduto) => {
		console.log('Carrinho', idProduto)
		console.log('Carrinho', allJobs)
		const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => idProduto === produto.id)
		if (produtoNoCarrinho) {
		  return alert("Esse produto já foi adicionado ao carrinho!")
		} else {
		  const produtoParaAdicionar = allJobs.find(produto => idProduto === produto.id)
	
		  const novosProdutosNoCarrinho = [...this.state.produtosNoCarrinho, {...produtoParaAdicionar}]
		  alert("Serviço adicionado no carrinho!")
	
		  this.setState({ produtosNoCarrinho: novosProdutosNoCarrinho})
		}
	  }

	  removerDoCarrinho = (idProduto) => {
		const copiaCarrinho = [...this.state.produtosNoCarrinho]
		const ficaNoCarrinho = copiaCarrinho.filter((produto) => {
		  return idProduto !== produto.id
		})
		this.setState({ produtosNoCarrinho: ficaNoCarrinho })
	  }

	  deixarCarrinhoVazio = () => {
		this.setState({ produtosNoCarrinho: [] })
	  }

	//! Data que vem  Api getAllJobs la do cardproduto. 
	gettingDataAPP = (dataJobs) => {
		console.log('gettingDataAPP', dataJobs)

	}

	mudarPagina = () => {
		switch (this.state.paginaAtual) {
			case "home":
				return <CardProdutos onClickToCard={this.onClickToCard}
				produtosNoCarrinho={this.state.produtosNoCarrinho}
				removerDoCarrinho={this.removerDoCarrinho}
				deixarCarrinhoVazio={this.deixarCarrinhoVazio}
				/>
			case "carrinho":
				return <PaginaCarrinho/>
			default:
				return <CardProdutos onClickToCard={this.onClickToCard}
				produtosNoCarrinho={this.state.produtosNoCarrinho}/>
		}
	}


	render() {

		console.log("produtoNoCarrinho", this.state.produtosNoCarrinho)


	
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header mudarParaCarrinho={this.mudarParaCarrinho}
					mudarParaHome={this.mudarParaHome} />
				<Button>Contratar serviço</Button>
				<Button>Seja um ninja</Button>

				<CardCadastro/>
				{this.mudarPagina()}

			</ThemeProvider>
		)
	}
}

export default App
