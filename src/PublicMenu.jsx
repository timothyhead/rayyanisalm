import React, { useEffect, useMemo, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";




function PublicMenu(props) {
    const [password, setPassword] = useState();
    const  [storedPassword, setStoredPassword] = useState("123456");
    const [isLoginVis, setIsLoginVis] = useState(false);
    const [cart, setCart] = useState();
    const [idOfRemoved, setIdOfRemoved] = useState();
    const  [retrivedData, setRetrivedData] = useState();

  useEffect(() => {
    props.sendUpIsInit(true)
  }, [])

    function changePassword(changedPassword) {
      
        setStoredPassword(changedPassword)
      }
      function pull_data_product(data) {
        console.log("data", data);
        setCart(data)
      }
      // pull data from cart.js
function pull_idOfRemoved(id) {
    setIdOfRemoved(id)
  
  }
 function pull_retrivedData(data) {
    console.log("retrived data", retrivedData);
setRetrivedData(data);
 }
     

 return (
    <div className="container">
   
    
    <div className="row">
        <div className="col-md-12">
        </div>
    </div>
    <div className="row">
        <div className="col-md-8">
            <ProductList productData={pull_data_product} idOfRemoved={idOfRemoved} cart={cart} pull_retrivedData={pull_retrivedData}/>
        </div>
        <div className="col-md-4">
        <Cart  className="cart-div" cart={cart} func={pull_idOfRemoved} retrivedData={retrivedData}/>
        </div>
    </div>

    <footer>
        <small>
           with thanks to <a href="https://twitter.com/krzysu">Kris Urbas for 'inspriation'</a>, source code for original shopping cart part available on <a href="https://github.com/krzysu/reactjs-shopping-cart">github</a>
        </small>
    </footer>
</div>
 )

};
export default PublicMenu;