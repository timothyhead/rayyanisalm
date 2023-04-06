

import React from "react";
import { Card, Row, Col, Button, Stack } from "react-bootstrap";
import Container from 'react-bootstrap/Container';




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


 
 <Card style={{ width: '18rem' }}>

 <Card.Body>
 <Card.Title>{MealName}</Card.Title>
 <Card.Text>{BodyText}</Card.Text>
 <Card.Text>{price}</Card.Text>


</Card.Body>
<a rel="ar" href={model}>
    <Card.Img variant="bottom"  className="image-size" src={image} alt="No Image">
    </Card.Img>
    </a>
    <Button  variant="outline-danger" size="sm" onClick={handleClick}>Delete</Button>
    </Card>
 


</div>
    )
}

export default MenuItem;