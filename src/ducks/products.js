import { type } from "@testing-library/user-event/dist/type";
import  { retriveData } from '../data/products';




const LOAD   = 'products/LOAD';
const DELETE = 'products/DELETE';
// reducer
export default function products(state = [], action) {
    switch (action.type) {
        case "LOAD":
         retriveData()
             return  [...state,  ...JSON.parse(localStorage.getItem('data2'))]
           
          
            case "DELETE":
                return [];
                default:
                     return state;
            }
    return state; // nothing to do here, but we need products node in redux store
}

// reducer
// export default function products(state = []) {
//     return state; // nothing to do here, but we need products node in redux store
// }

// selectors
export function  getProducts(state, props) {
    return state.products;
}


export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}
// // action creators

export function loadMenu()  {
return {
    type: "LOAD"
}
}
export function deleteMenu() {
    return {
        type: "DELETE"
    }
}









