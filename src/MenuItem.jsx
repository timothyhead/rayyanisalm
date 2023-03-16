
import { logDOM } from "@testing-library/react";
import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import steak from "./steak.jpg"

function MenuItem(props) {
  
const menuItems = props.menuItem;
const menuItemArray = menuItems["menuItem"] || [];


const MealName = menuItemArray[0];
const BodyText = menuItemArray[1]
const detailArray = menuItems["detail"] || [];
const image = detailArray[0];
const model = detailArray[1];
const price = menuItems.price;


const id = menuItems.id


function handleClick() {
    props.onDelete(props.id)
    
}

    return(
        <div >
        <div  className="margin-bottom-20">
   <h3 className="inline">{MealName}</h3>
   <p  className="inline margin-left-30px">{BodyText}</p>
   <h4 className="inline margin-left-30px">{price} </h4>
   </div>
   <details className="centre margin-bottom-30 inline">
   
   <div>
    <a rel="ar" href={model}>
       <img className="image50" src={image}></img>
    </a>

</div>
   </details>
   <button className="inline" onClick={handleClick}>
    Delete
   </button>
     
        </div>
    )
}

export default MenuItem;