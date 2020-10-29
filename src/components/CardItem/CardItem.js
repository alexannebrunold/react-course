import React, { useState } from 'react';
import './CardItem.css';

function CardItem(props) {
  const { product } = props;
  const { price, item } = product;
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='CardItem'>
      <h1>Price : {price}</h1>
      <h1>Item :{item}</h1>
      <h1>quantity : {quantity}</h1>
      <button onClick={() => setQuantity(quantity + 1)}>Ajouter</button>
      <button onClick={() => setQuantity(quantity - 1)}>Remove</button>
    </div>
  );
}

export default CardItem;
