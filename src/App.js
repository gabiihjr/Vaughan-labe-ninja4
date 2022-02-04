import React from 'react'
import { GlobalStyle } from './styled-app.js'
import PaginaCarrinho from './pages/PaginaCarrinho'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './constants/Tema';
import Home from './components/Home';
import CardProdutos from './components/CardProdutos';
import CardCadastro from './components/CardCadastro';
import Header from './components/Header';

class App extends React.Component {
	state = {
		paginaAtual: "home",
		produtosNoCarrinho: [],
	};

	componentDidMount() {
		const carrinhoLocal = JSON.parse(localStorage.getItem("Produtos no Carrinho"))
		if (carrinhoLocal) {
			this.setState({ produtosNoCarrinho: carrinhoLocal })
		}
	};

	componentDidUpdate() {
		const carrinhoString = JSON.stringify(this.state.produtosNoCarrinho)
		localStorage.setItem("Produtos no Carrinho", carrinhoString)
	};

	mudarParaHome = () => {
		this.setState({ paginaAtual: "home" })
	}

	mudarParaCarrinho = () => {
		this.setState({ paginaAtual: "carrinho" })
	}

	mudarParaLista = () => {
		this.setState({ paginaAtual: "lista" })
	}

	mudarParaCadastro = () => {
		this.setState({ paginaAtual: "cadastro" })
	}

	onClickToCard = (allJobs, idProduto) => {
		const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => idProduto === produto.id)
		if (produtoNoCarrinho) {
			return alert("Esse produto já foi adicionado ao carrinho!")
		} else {
			const produtoParaAdicionar = allJobs.find(produto => idProduto === produto.id)

			const novosProdutosNoCarrinho = [...this.state.produtosNoCarrinho, { ...produtoParaAdicionar }]
			alert("Serviço adicionado no carrinho!")

			this.setState({ produtosNoCarrinho: novosProdutosNoCarrinho })
		}
	}

	removerDoCarrinho = (idProduto) => {
		const copiaCarrinho = [...this.state.produtosNoCarrinho]
		const ficaNoCarrinho = copiaCarrinho.filter((produto) => {
			return idProduto !== produto.id
		})
		this.setState({ produtosNoCarrinho: ficaNoCarrinho })
		alert("O serviço foi retirado do carrinho com sucesso!")
	}

	deixarCarrinhoVazio = () => {
		this.setState({ produtosNoCarrinho: [] })
	}

	mudarPagina = () => {
		switch (this.state.paginaAtual) {
			case "home":
				return <Home mudarParaHome={this.mudarParaHome}
					mudarParaLista={this.mudarParaLista}
					mudarParaCadastro={this.mudarParaCadastro} />
			case "carrinho":
				return <PaginaCarrinho
					produtosNoCarrinho={this.state.produtosNoCarrinho}
					removerDoCarrinho={this.removerDoCarrinho}
					deixarCarrinhoVazio={this.deixarCarrinhoVazio}
					mudarParaLista={this.mudarParaLista} />

			case "lista":
				return <CardProdutos onClickToCard={this.onClickToCard}
					produtosNoCarrinho={this.state.produtosNoCarrinho}
					removerDoCarrinho={this.removerDoCarrinho}
					deixarCarrinhoVazio={this.deixarCarrinhoVazio}
				/>
			case "cadastro":
				return <CardCadastro />
			default:
				return <Home mudarParaHome={this.mudarParaHome}
					mudarParaLista={this.mudarParaLista}
					mudarParaCadastro={this.mudarParaCadastro} />
		}
	}

	render() {

		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header mudarParaHome={this.mudarParaHome}
					mudarParaCarrinho={this.mudarParaCarrinho} />
				{this.mudarPagina()}
			</ThemeProvider>
		)
	}
}

export default App