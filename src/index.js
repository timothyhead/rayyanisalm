import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
import productsData from './data/products';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({
   cart: cartReducer,
   products: productsReducer
});

let store = createStore(
   rootReducer,
   {
       products: productsData // initial store values
       //products: updateproduct
   },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

// root.render(
//  // <React.StrictMode>
//     <App />
//  // </React.StrictMode>
// );
root.render(
   <Provider store={store}>
       <App />
   </Provider>,
   // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
