
import React, { useRef} from "react";
import MenuItem from "./MenuItem";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function MenuList(props) {

    var isinit = useRef(true)

//   useEffect(() => {

//       props.menuItems.shift()

//   }, [ props.menuItems])

function handleClick(id) {



props.delete(id)

}

if  (isinit.current === true) {
    props.menuItems.shift();
     isinit.current = false;
      console.log(isinit, "isinit");
}
 
return (
    <div>
    <h4 className="centre">{props.sectionName}</h4>
  
    <ul>
{
    
 
}
  
    <Container>
<Row>



    

 

 
    {
    
   props.menuItems?.map( function(item, index) {
    return  <Row  key={item.id} xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
    <Col  key={item.id}> 
    <MenuItem  key={item.id} id={index} menuItem={item} onDelete={handleClick} />
    </Col>
    </Row>
  
 
 
  
    })
   
  
    
    }

 
  

   </Row>
   </Container>


  
   </ul> 
  
    </div>
  
)
};

export default MenuList;