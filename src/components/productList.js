import React from 'react';
import Product from './product'
import './productList.css';
// Be sure to uncomment this line before trying to use the Product component!
// import Product from './product'

function ProductList(props) {
  return (
    <div className="ProductList">
      {
      props.inventory.map((product)=>(
       <Product name={product.name} price={product.price} addToShoppingCart={props.addToShoppingCart} removeFromShoppingCart={props.removeFromShoppingCart}/>
      ))}
    </div>
  );
}

export default ProductList;
