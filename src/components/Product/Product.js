import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const myImage = null
    

function Product(props) {

   
   const handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }
    
    
    
        const { mealName, price, bodyText, image, isInCart, model} = props;
     console.log("image 25 Product/productjs", image);

        return (
           
            <div >
        {console.log("Product", mealName)}

<Card>
                <Card.Body>
                    <Card.Title>{mealName}</Card.Title>
                    <Card.Text>{bodyText}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                
                </Card.Body>
             
               <Card>
           
           
               <Button variant={isInCart ? "danger" : "outline-primary"}     className={isInCart ? "no-transparency" : "transparency"}
                            onClick={handleClick}
                        > {isInCart ? 'Remove' : 'Add to cart'}</Button>
            
               <a rel="ar" href={model}>
         <Card.Img className='image-size' variant='bottom' src={image}></Card.Img>  
           {/* // <img  src={image}></img> */}
               </a>
              
              
               </Card>
             
            </Card>


   
        
          
           
         
                {/* <div className="caption">
                    <h3>{name}</h3>
                   
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                    <img src={process.env.PUBLIC_URL + image}   alt="product" />
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                     
                    </div>
                </div> */}
            </div>
        );
    }


Product.propTypes = {
    id: PropTypes.number,
     name: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
