import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';




function CartItem( props) {
    const [numItems, setNumItems] = useState(1)// { price, onClick, currency , func, totalValue},
    const [newPrice, setNewPrice] = useState(props.item?.price)
    const [changeInPrice, setChangeInPrice] = useState(props.item?.price)
    const [isIncremented, setIsincremented] = useState(true);
    const [isIncreasedOrDecreased, setIsIncreasedOrDecreased] = useState(false);

useEffect(() => {
   if (props.isInCart === false) {
    props.changeInTotalValue(-newPrice);
    // setNewPrice(0)
    // setChangeInPrice(0)
   
   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [ props.isInCart])
useEffect(() => {
    if (isIncreasedOrDecreased === true) {
    if (isIncremented === true) {
        props.changeInTotalValue(changeInPrice);
        setIsIncreasedOrDecreased(false)
    } else {
        props.changeInTotalValue(-changeInPrice);
        setIsIncreasedOrDecreased(false)
    }
} else {
    props.changeInTotalValue(changeInPrice);
 }
// if (isIncremented === false) {
//     props.changeInTotalValue(-changeInPrice);
// } else {
//     props.changeInTotalValue(changeInPrice);
// }
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [newPrice])

    useEffect(() => {
  
       setChangeInPrice(props.item?.price);
    }, [props.item?.price, props.item])

    function handleClick() {
     
props.func(props.item?.id);
props.changeInTotalValue(-newPrice);

    }
 // +/- buttons  
function increment() {
   
setIsincremented(true);
setIsIncreasedOrDecreased(true);
    setNumItems(numItems + 1);
     setNewPrice(newPrice + props.item?.price);
     setIsincremented(true)
    //  props.changeInTotalValue(changeInPrice);
}
function decrement() {
  
    if (numItems > 1) {
    setIsincremented(false);
    setIsIncreasedOrDecreased(true);
        setNumItems(numItems - 1);
         setNewPrice(newPrice - props.item?.price);
         setIsincremented(false)
        //  props.changeInTotalValue(-changeInPrice);
    }

   
}




    return (
        <div className="cart-item">
            <div>
            <h1>Hello world</h1>
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



export default CartItem;
