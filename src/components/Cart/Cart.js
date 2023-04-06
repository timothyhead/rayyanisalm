import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import { retriveData } from '../../data/products';






function Cart(props) {
  const [toggle, setToggle] = useState(false)
  const [newTotal, setNewTotal] = useState(0)
  const [newTotalOfItem, setNewTotalOfItem] = useState([]);
  const [hasRemoved, setHasRemoved] = useState();
  const [items, setItems] = useState([]);
  const [idOfRemoved, setIdOfRemoved] = useState();


useEffect(() => {
// get all values of retrived data and only select the ones with the props.cart id which is sent up from product.js to productlista nd down int this cart
  if (props.cart?.isInCart === true) {
    let data = retriveData?.filter((item) => {
    
      return item.id === props.cart.id
    })
  
setItems((prevalue) => {
if (prevalue?.length > 0) {
 return [...prevalue, ...data]
  } else {
    return data
  }

})
  }
  // get items remove item with props.cart id and set items with remaing items
  if (props.cart?.isInCart === false) {
    let data = items?.filter((item) => {
    
      return item.id !== props.cart.id
    })
   setItems(data)
     
  }
}, [props.cart]) 

useEffect(() => {
  console.log("items in cart 47", items);
 props.func(idOfRemoved)
}, [items])

  // useEffect(() => {
  // if (newTotalOfItem > 1) {
  //  // setNewTotalOfItem(newTotalOfItem.pop())
  
  // }
    
    
//   }, [newTotal])
//   useEffect(() => {
//     setNewTotal(newTotal - newTotalOfItem);
//     console.log("here", newTotalOfItem);
//   }, [hasRemoved])
//   const pull_data = (data) => {
//    setNewTotal(newTotal + data)
   
//     };
//     const pull_newTotalofItem = (data => {
// if (newTotalOfItem.length > 0) {
//   setNewTotalOfItem((prevalue) => {
//     return [...prevalue, data]
//   })
//   if (newTotalOfItem.length === 0) {
//     setNewTotalOfItem([data]);
//   }
// }
// console.log("pulled", data, total , newTotal);
//     })

// function remove(anItem) {
//    console.log("an item", anItem, "items", items);
//  let data =  items.filter((item) => {
//     return item.id !== anItem.id
//   })
//   console.log("data in cart", data)
//   setItems(data);
//   setHasRemoved((hasRemoved)=> !hasRemoved)


// }
const pull_data = (id) => {
  setIdOfRemoved(id)
const data = items.filter((item) => {
  return item.id !== id
})
console.log("items", data);
setItems(data)
  };

  function changeInTotalValue(price) {
    console.log("price", price, newTotal);
    setNewTotal(newTotal + price)
  }

    
    return (
        <div className='cart-div'>

            <h3>Shopping Cart</h3>
          
<Button onClick={() => {setToggle(!toggle)}} variant="outline-primary">Cart</Button>
  
          {(toggle === true) &&   <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items?.length > 0 && (
                            <div className="cart__body">
                                {items?.map(item => (
                                    <CartItem key={item.id} item={item}  func={pull_data}  changeInTotalValue={changeInTotalValue} />
                                ))}
                            </div>
                        )}
                        {items?.length === 0 && (
                          
                           <div className="alert alert-info">Cart is empty</div>
                       
                        )}
                        <div className="cart__total">Total: {newTotal} </div>
                        <div>
<form action="https://public.herotofu.com/v1/61bc7830-cf9d-11ed-9802-15820248f1c1" method="post" acceptCharset="UTF-8">
  <div>
    <label htmlFor="name">Your Name</label>
    <input name="Name" id="name" type="text" />
  </div>
  <div>
    <label htmlFor="email">Your Email</label>
    <input name="Email" id="email" type="email" required  />
  </div>
  <div>
  <div>   
  </div>
    <input type="submit" value="Download CTA" />
    <div className='my-style' aria-hidden="true">
      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
    </div>
  </div>
</form>
</div>
   
                    </div>
                </div>
            </div>
          }
        

      
  

            
          
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
