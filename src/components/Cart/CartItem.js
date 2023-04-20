import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';



function CartItem( props) {
    const [numItems, setNumItems] = useState(1)// { price, onClick, currency , func, totalValue},
    const [newPrice, setNewPrice] = useState(props.item?.price)
    const [changeInPrice, setChangeInPrice] = useState(props.item?.price)

useEffect(() => {
    props.changeInTotalValue(changeInPrice);
}, [changeInPrice, props])

    useEffect(() => {
    

       setChangeInPrice(props.item?.price);
    }, [newPrice, props.item?.price])

    function handleClick() {
     
props.func(props.item?.id);
props.changeInTotalValue(-newPrice);



    }
 // +/- buttons  
function increment() {

    setNumItems(numItems + 1);
     setNewPrice(newPrice + props.item?.price);
     props.changeInTotalValue(changeInPrice);
}
function decrement() {
    if (numItems > 1) {
    
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
