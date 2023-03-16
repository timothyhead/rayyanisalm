import React, { useState } from "react"
import {BrowserRouter as Router, Link, Routes,  Route, Outlet}  from "react-router-dom"
import EditMenu from "./EditMenu"
import PublicMenu from "./PublicMenu"

function Header() {

  var [aMenuArray, setMenuArray] = useState([{
    mealName: "",
   bodyText: "",
   image: null,
   detailText: "",
   price: "",
    section: ""
            
         }]);
        
         const pull_data = (data) => {
         setMenuArray(data)
        };



return(
    <div>
      
<Router basename="/rayyanisalm">
<header>
     <nav>
       <Link className="links" to="/edit-menu">EDIT MENU</Link>
       <Link className="links" to="/public-menu">PUBLIC MENU</Link>
       </nav>
       <Outlet />
     </header>
     <Routes>
        <Route path="/edit-menu" element={<EditMenu func={pull_data}/>} />
        <Route path="/public-menu" element={<PublicMenu menuArray={aMenuArray}/>} />
     </Routes>
</Router>
      
    </div>
)
}

export default Header