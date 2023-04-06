import React, { useEffect, useMemo, useRef, useState } from "react";

import ProductList from "./components/ProductList";




function PublicMenu(props) {
    const [password, setPassword] = useState()
    const  [storedPassword, setStoredPassword] = useState("123456")
    const [isLoginVis, setIsLoginVis] = useState(false)

  useEffect(() => {
    props.sendUpIsInit(true)
  }, [])

    function changePassword(changedPassword) {
        console.log("password", changedPassword, password,);
        setStoredPassword(changedPassword)
      }
      
    

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