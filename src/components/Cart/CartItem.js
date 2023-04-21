import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';



function CartItem( props) {
    const [numItems, setNumItems] = useState(1)// { price, onClick, currency , func, totalValue},
    const [newPrice, setNewPrice] = useState(props.item?.price)
    const [changeInPrice, setChangeInPrice] = useState(props.item?.price)

useEffect(() => {
    props.changeInTotalValue(changeInPrice);
    console.log("change in price");
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [newPrice])

    useEffect(() => {
    console.log("here 1", props.item.isIncart);

       setChangeInPrice(props.item?.price);
    }, [props.item?.price, props.item.isIncart])

    function handleClick() {
     
props.func(props.item?.id);
props.changeInTotalValue(-newPrice);
console.log("here 2");



    }
 // +/- buttons  
function increment() {
console.log("+/-");
    setNumItems(numItems + 1);
     setNewPrice(newPrice + props.item?.price);
     props.changeInTotalValue(changeInPrice);
}
function decrement() {
    console.log("+/-");
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
