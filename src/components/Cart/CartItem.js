import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

const CartItem = ({ mealName, price, onClick }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{mealName}</span>
            </div>
            <div className="cart-item__price">{price}</div>
        </div>
    );
}

CartItem.propTypes = {
    mealName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
