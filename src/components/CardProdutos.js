import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

///   APi  - Output  get all jobs  - for test only.

const data = {
  "jobs": [
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2d147",
      "title": "Cortar a grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 1000,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-12-30T00:00:00.000Z",
      "taken": false
    },
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2dytryrt190",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    },
    {
      "id": "34d80f70-5129-402a-bc0d-d60421432b2dyrtyrt191",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-01-01T00:00:00.000Z",
      "taken": false
    },
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b242tyryrt3423d192",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    },
    {
      "id": "34d80f70-5129-402a-bc0d-d60424234231b2d191",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    },
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b24treter32423d192",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b4tretre324232d192",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b42342trerte32d192",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d604treter21b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uyttretertu1b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2d190tret4324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uyrewrewtu1b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2d190tre4324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uytrewrewwu1b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60trr421b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-eed6042uytu1b2d19043ytryrt24",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-4ee02a-bc0d-d60421b2d190treter4324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-512eew9-402a-bc0d-d6042uytu1b2ytryrtrtd1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2d190432tretert4",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-51gr29-402a-bc0d-tretre",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2terterd1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uytu1b2d1trrr904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421treyreb2d19erreter04324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uyttru1b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421brr2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uyfdtu1b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421eeb2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uy1b2d1rew904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2d1904tretertre324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uytu1b2tred1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2d1904tre324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uytu1b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d60421b2d1tre904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
    ,
    {
      "id": "34d80f70-5129-402a-bc0d-d6042uyytrtu1b2d1904324",
      "title": "Lavar prato grama",
      "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
      "price": 40,
      "paymentMethods": [
        "PayPal",
        "boleto"
      ],
      "dueDate": "2022-09-30T00:00:00.000Z",
      "taken": false
    }
  ]
}



console.log(data)


const ProductContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* border: 1px solid black; */
box-shadow: 0 0 1px 5px #f4f2fae7;
padding:1rem 1rem 1rem 1rem;
background-color: #dad1ff;
border-radius: 5px;
/* max-width: 24.2%; */
box-sizing: border-box;

p:first-child { 
  margin:1rem 1rem;
  font-size: 1.5rem;
  color:#7867BF;
} 

>div{ 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 90%;
  background-color: #dad1ff;
  padding: 0.2rem  0.25rem ;
}
button{ 
  background-color: #dad1ff;
  color:#7867BF;
  border:none;
  border-radius:5px;
  :hover {
      background-color: #483d72;
      filter: brightness(90%);
      cursor: pointer;
  }
}
`

const Container = styled.div`
/* flex-wrap: wrap; */
display: grid;
grid-template-columns:repeat(4, 1fr) ;
gap:1rem;
width: 100%;
padding: 0 2rem;
box-sizing: border-box;

`






export default class CardProdutos extends Component {




  onClickToDetail =(idProduto)=> { 

  }

  onClickToCard =(idProduto)=>{ 
    
  }
   


  render() {

    // this.data1()

    const productsToScreen = data.jobs.map(item =>
      <ProductContainer
        key={item.id}>
        <p>{item.title}</p>
        {/* A data Ta errada mes a menos  */}
        <p>Até {(new Date(item.dueDate)).toLocaleDateString()}
          &nbsp; por  <strong>{(item.price).toLocaleString('pt-BR',
            { style: 'currency', currency: 'BRL' })}</strong></p>
        <div> <Button variant="text" color="primary" onClick={() => this.onClickToDetail('Ver Detalhes', item.id)} >
          VER DETALHES </Button>
          <Button onClick={() => this.onClickToCard('carrinho', item.id)}>
            <AddShoppingCartIcon/>
          </Button>
        </div>
      </ProductContainer>)

    return (
      <Container>
        {productsToScreen}
      </Container>
    )
  }
}