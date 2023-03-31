import React from 'react';
import PropTypes from 'prop-types';


const CartItem = ({ mealName, price, onClick }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{mealName}</span>
            </div>
            <div className="cart-item__price">{price}</div>
            <form action="https://public.herotofu.com/v1/61bc7830-cf9d-11ed-9802-15820248f1c1" method="post" accept-charset="UTF-8">
  <div>
    <label for="name">Your Name</label>
    <input name="Name" id="name" type="text" required />
  </div>
  <div>
    <label for="email">Your Email</label>
    <input name="Email" id="email" type="email" required  />
  </div>
  <div>
    <input type="submit" value="Download CTA" />
    <div style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;" aria-hidden="true">
      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
    </div>
  </div>
</form>
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
