import React from 'react';

function Product(props) {
  return (
    <div className="Product" >
      <h2>{props.name}</h2>
      <h3>${props.price}</h3>
      <div className="buttons">
        <button onClick={()=>{props.addToShoppingCart(props.name,props.price)}}>Add</button>
        <button onClick={()=>{props.removeFromShoppingCart(props.name)}}>Remove</button>
      </div>
    </div>
  );
}

export default Product;
