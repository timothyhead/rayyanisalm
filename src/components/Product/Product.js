import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Card, Col, Container, Row } from 'react-bootstrap';

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
    
    
    
        const { mealName, price, bodyText, image, isInCart} = props;
     

        return (
           
            <div className='card-width'>
           
            <Container>
    <Row >
    <Col className='col-6'>
    <Card>
                <Card.Body>
                    <Card.Title>{mealName}</Card.Title>
                    <Card.Text>{bodyText}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                </Card.Body>
               
            </Card>
    </Col>
   
        
           <Col className='col-3'>
           <Card>
          
           <img src={image}></img>
            </Card>
            <Card>
                <Button variant='light'      className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={handleClick}
                        > {isInCart ? 'Remove' : 'Add to cart'}</Button>
                           
            </Card>
           </Col>
         
           
           
    </Row>
    </Container>
           
         
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
