import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const myImage = null
var count = 0
var isinit = false

    

function Product(props) {

   
  
    
        const { mealName, price, bodyText, image,  model, id, func, cart} = props;

        const [isInCart, setIsinCart] = useState(false);

        const [isSet, SetIsSet] = useState(false);
      

     
     
       useEffect(() => {
if (props.idOfRemoved === id) {
    setIsinCart(false)
}
    
       }, [props.idOfRemoved])

        const handleClick = () => {
          
    setIsinCart(isInCart => !isInCart)
           
        }
      
        
       
      useEffect(() => {

        if (isInCart) {
           func({
                isInCart: true,
                id: id
            })
        } else {
          func({
                isInCart: false,
                id: id
            })
        }

      }, [isInCart])
   
   
        return (
           
            <div className='margin-bottom-20'>
       
<Card >
                <Card.Body >
                    <Card.Title>{mealName}</Card.Title>
                    <Card.Text>{bodyText}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                
                </Card.Body>
             
               <Card>
           
           
               <Button variant={isInCart ? "danger" : "outline-primary"}     className={isInCart ? "no-transparency" : "transparency"}
                            onClick={handleClick}
                        > {isInCart ? 'Remove' : 'Add to cart'}</Button>
            {/* $(model)#applePayButtonType=plain */}
               <a rel="ar"  href={model}>
         <Card.Img className='image-size' variant='bottom' src={image}></Card.Img>  
           {/* // <img  src={image}></img> */}
               </a>
               {/* <a rel="ar" id="ApplePay" href="alarm‑clock.usdz#applePayButtonType=plain&checkoutTitle=Retro%20Alarm%20Clock&checkoutSubtitle=With%20built-in%20FM%20tuner&price=$92.50">
    <img src="alarm-clock-thumbnail.png"></img>
</a> */}
              
              
               </Card>
             
            </Card>


   
            </div>
        );
    }

// }

export default Product;
