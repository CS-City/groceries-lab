import React from 'react';
import './shoppingcart.css';

function ShoppingCart(props) {
  let total=0;
  let Total = props.cart.reduce((totalValue, currentItem) => {
    return totalValue + currentItem.price
}, total);

  return (
    <div className="ShoppingCart">
              {props.cart.map((item)=>{
                return <div className="cartItem"><h3>{item.name}</h3><h5>$ {item.price}</h5></div>
              })}

      <h2>Total: ${Total}</h2>
    </div>
  );
}

export default ShoppingCart;
