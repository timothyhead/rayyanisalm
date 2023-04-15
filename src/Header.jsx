import React, { useEffect, useState } from "react"
import {BrowserRouter as Router, Link, Routes,  Route, Outlet, useNavigate}  from "react-router-dom"
import EditMenu from "./EditMenu"
import PublicMenu from "./PublicMenu"
import Form from 'react-bootstrap/Form';


function Header() {

  const [password, setPassword] = useState();
const  [storedPassword, setStoredPassword] = useState("123456");
const [isLoginVis, setIsLoginVis] = useState(false);



  var [aMenuArray, setMenuArray] = useState([{
    mealName: "",
   bodyText: "",
   image: "",
   model: "",
   detailText: "",
   price: "",
    section: ""
            
         }]);
        
         const pull_data = (data) => {
        setMenuArray(data)
        };
function changePassword(changedPassword) {

  setStoredPassword(changedPassword);
}
function sendUpIsInit(isVisible) {

setIsLoginVis(isVisible)
}




return(
    <div>
     <div>
   
   { (isLoginVis === true) &&   <Form className="password-form-width">
      <Form.Group>
      <Form.Label>Admin Login</Form.Label>
      <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      </Form>
      }
     </div>
<Router basename="/rayyanisalm">
<header>
     <nav>
      {storedPassword === password &&  <Link className="links" to="/edit-menu">EDIT MENU</Link> }
     <Link className="links" to="/public-menu">PUBLIC MENU</Link>
       </nav>
       <Outlet />
     </header>
     <Routes>
        <Route path="/edit-menu" element={<EditMenu func={pull_data} passUpPassword={changePassword} sendUpIsInit={sendUpIsInit} />}  />
        <Route path="/public-menu" element={<PublicMenu sendUpIsInit={sendUpIsInit}/>} />
     </Routes>
</Router>
     {/* <data data={aMenuArray}></data> */}

    </div>
)
}

export default Header