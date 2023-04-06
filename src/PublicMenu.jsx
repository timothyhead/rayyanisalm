import React, { useEffect, useMemo, useRef, useState } from "react";
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';



function PublicMenu(props) {

  

       
    

 return (
    <div className="container">
    <div className="row">
        <div className="col-md-12">
        </div>
    </div>
    <div className="row">
        <div className="col-md-8">
            <ProductList />
        </div>
        <div className="col-md-4">
           
        </div>
    </div>

    <footer>
        <small>
           with thanks to <a href="https://twitter.com/krzysu">Kris Urbas</a>, source code for shooping cart part available on <a href="https://github.com/krzysu/reactjs-shopping-cart">github</a>
        </small>
    </footer>
</div>
 )

};
export default PublicMenu;