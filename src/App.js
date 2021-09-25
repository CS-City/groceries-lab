import React, {Component} from 'react';
import './App.css';
import ShoppingCart from './components/shoppingcart';
import ProductList from './components/productList';
import Hero from './components/hero';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }

  // Inventory - we might normally prefer to use a database, but this is a good placeholder.
  inventory = [
    {name: "Apple", price: 1.99},
    {name: "Loaf of Bread", price: 1.50},
    {name: "Milk", price: 2.50}
  ]

  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function has not.
  addToShoppingCart = (itemName,itemPrice) => {
    this.setState(state => {
      state.cart.push({name:itemName, price:itemPrice})
      return state
    })
  }

  removeFromShoppingCart = (out) => {

    let newCart=[...this.state.cart];
    let toDeleteItem=newCart.findIndex((item)=>item.name===out)
    console.log(toDeleteItem)
    newCart.splice(toDeleteItem,1)

    this.setState({cart:newCart})




    // let newCart=[...this.state.cart];

    // newCart=newCart.filter((item)=>item.name===out.name);
    // newCart.splice(1)

    // this.setState({cart: newCart})
  }

  render() {
    return (
      <div className="App">
        <Hero/>
        <ShoppingCart cart={this.state.cart}/>
        <div className="main">
          <ProductList inventory={this.inventory}  addToShoppingCart={this.addToShoppingCart} removeFromShoppingCart={this.removeFromShoppingCart}/>
        </div>
      </div>
    );
  }
}

export default App;
