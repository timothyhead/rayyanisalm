import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';



function CartItem( props) {
    const [numItems, setNumItems] = useState(1)// { price, onClick, currency , func, totalValue},
    const [newPrice, setNewPrice] = useState()
    const [isIncreasing, setIsIncreasing] = useState(true)
    const [id, setId] = useState();
    var isFirstPrice = false


    useEffect(() => {
        if (isFirstPrice === false) {
            isFirstPrice = true;
           
        } 
        if (isFirstPrice === true) {
       if (isIncreasing === true) {
        // func(price);
        console.log("+");
       }
       if (isIncreasing === false) {
        // func(-price);
        console.log("-");
       }
           
        }
    //    totalValue(newPrice) 
    }, [newPrice])

    function handleClick() {
props.func(props.item?.id)


    }
   
function increment() {
   setIsIncreasing(true)
    setNumItems(numItems + 1);
    // setNewPrice(newPrice + price);
}
function decrement() {
    if (numItems > 1) {
       setIsIncreasing(false)
        setNumItems(numItems - 1);
        // setNewPrice(newPrice - price);
    }
   
}


// className="btn btn-danger btn-xs"

    return (
        <div className="cart-item">
            <div>
               <Button variant='danger' size="lg"  onClick={handleClick}>X</Button>
                <span className="cart-item__name">{props.item?.mealName}</span>
            </div>
            <div className="cart-item__price">{props.item?.price}</div>
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
