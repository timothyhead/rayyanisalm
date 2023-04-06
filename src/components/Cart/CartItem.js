import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';



function CartItem( props) {
    const [numItems, setNumItems] = useState(1)// { price, onClick, currency , func, totalValue},
    const [newPrice, setNewPrice] = useState(props.item?.price)
    const [isIncreasing, setIsIncreasing] = useState(true)
    const [id, setId] = useState();
    const [changeInPrice, setChangeInPrice] = useState(props.item?.price)
    var isFirstPrice = false
useEffect(() => {
    props.changeInTotalValue(changeInPrice);
}, [])

    useEffect(() => {
    

       setChangeInPrice(props.item?.price);
    }, [newPrice])

    function handleClick() {
     
props.func(props.item?.id);
props.changeInTotalValue(-newPrice);



    }
 // +/- buttons  
function increment() {
   setIsIncreasing(true)
    setNumItems(numItems + 1);
     setNewPrice(newPrice + props.item?.price);
     props.changeInTotalValue(changeInPrice);
}
function decrement() {
    if (numItems > 1) {
       setIsIncreasing(false)
        setNumItems(numItems - 1);
         setNewPrice(newPrice - props.item?.price);
         props.changeInTotalValue(-changeInPrice);
    }

   
}




    return (
        <div className="cart-item">
            <div>
               <Button variant='danger' size="lg"  onClick={handleClick}>X</Button>
                <span className="cart-item__name">{props.item?.mealName}</span>
            </div>
            <div className="cart-item__price">{newPrice}</div>
  <div>
  <h3>{numItems}</h3>
    <Button onClick={increment}>+</Button>
    <Button onClick={decrement}>-</Button>
  </div>
        </div>
    );
}

// CartItem.propTypes = {
//     mealName: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     // currency: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired
// }

export default CartItem;
