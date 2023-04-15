

import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Stack } from "react-bootstrap";
import cube from "./Untitled.usdz"
import { Buffer } from "buffer";






function MenuItem(props) {
  
const menuItems = props.menuItem;
const menuItemArray = menuItems["menuItem"] || [];


const MealName = menuItemArray[0];
const BodyText = menuItemArray[1]
const detailArray = menuItems["detail"] || [];
const image = detailArray[0];
const model = detailArray[1];
const price = menuItems.price;

const [data, setData] = useState();
const [dt, setDt] = useState();



var aimage = new Image();

 

function handleClick() {
 
    props.onDelete(props.id)
    
}


useEffect(() => {
    let url = model
    fetch(url)
    .then(res => res.blob())
    .then(y => setData(y))
}, [model])


    useEffect(() => {
        if (data) {
setDt(URL.createObjectURL(data) + "#callToAction=Add%20to%20cart&checkoutTitle=" + MealName + "&checkoutSubtitle=enjoy&price=£4.00");
        }
    }, [data])                                             


  

    return(

        <div>

<h1>Hello</h1>
 <Card className="bottom-padding">

 <Card.Body>
 <Card.Title>{MealName}</Card.Title>
 <Card.Text>{BodyText}</Card.Text>
 <Card.Text>{price}</Card.Text>
 

</Card.Body>
<a rel="ar" id="ar-link" href={dt}> 
    <Card.Img variant="bottom"  className="image-size" src={image} alt="No Image">
    </Card.Img>
    </a>
    <Button  variant="outline-danger" size="sm" onClick={handleClick}>Delete</Button>
    </Card>
 


</div>
    )
}

export default MenuItem;