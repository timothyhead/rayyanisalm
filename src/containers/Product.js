import { connect } from 'react-redux';
import  Product, {loadMenu, deleteMenu} from '../components/Product';
import { addToCart, removeFromCart, isInCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
