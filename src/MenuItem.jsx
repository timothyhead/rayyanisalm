

import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import chair from "./chair.usdz"


function MenuItem(props) {
  
const menuItems = props.menuItem;
const menuItemArray = menuItems["menuItem"] || [];


const MealName = menuItemArray[0];
const BodyText = menuItemArray[1]
const detailArray = menuItems["detail"] || [];
const image = detailArray[0];
const model = detailArray[1];
const price = menuItems.price;





function handleClick() {
    props.onDelete(props.id)
    
}

    return(
       <div>
        {/* <div >
        
        <div  className="margin-bottom-20">
   <h3 className="inline">{MealName}</h3>
   <p  className="inline margin-left-30px">{BodyText}</p>
   <h4 className="inline margin-left-30px">{price} </h4>
   </div>
   <details className="centre margin-bottom-30 inline">
   
   <div>
    <a rel="ar" href={model}>
       <img className="image50" src={image} alt="No Iage"></img>
    </a>

</div>
   </details>
   <button className="inline" onClick={handleClick}>
    Delete
   </button>
     
        </div> */}
<div>
 <Container>
 <Row>
 <Col col>
 <Card style={{width: '100%'}}>
<Card.Title>{MealName}</Card.Title>
<Card.Text>{BodyText}</Card.Text>
<Card.Text>{price}</Card.Text>
    </Card>
    </Col>

<Col>
<Card style={{width: '100px'}}>
<a rel="ar" href={model}>
    <Card.Img variant="top"  className="image100" src={image} alt="No Image">

    </Card.Img>
    </a>
    <Button variant="outline-danger" onClick={handleClick}>Delete</Button>
    </Card>
</Col>
 </Row>
 </Container>
</div>
</div>
    )
}

export default MenuItem;