import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts, loadMenu} from '../ducks/products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}
const mapDispatchToProps = (dispatch) => ({
    loadMenu: () => dispatch(loadMenu())
    // deleteMenu: () => dispatch(deleteMenu)
})



export default connect(mapStateToProps)(ProductList);
