
import React, { useEffect} from "react";
import MenuItem from "./MenuItem";
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function MenuList(props) {



  useEffect(() => {

      props.menuItems.shift()

  }, [props.menuItem])

function handleClick(id) {



props.delete(id)

}


 
return (
    <div>
    <h4 className="centre">{props.sectionName}</h4>
  
    <ul>

  
    <Container>
<Row>



    


 
    {
    
   props.menuItems?.map( function(item, index) {
  
    return  <Col  className=" col-sm-auto col-md-auto col-lb-auto col-xl-auto col-auto d-flex" > 
    <MenuItem  id={index} menuItem={item} onDelete={handleClick}  key={index}/>
    </Col>
  
 
 
  
    })
   
  
    
    }

 
  

   </Row>
   </Container>


  
   </ul> 
  
    </div>
  
)
};

export default MenuList;