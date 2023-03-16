
import React, { useEffect} from "react";
import MenuItem from "./MenuItem";

function MenuList(props) {

  useEffect(() => {

      props.menuItems.shift()

  }, [props.menuItem])

function handleClick(id) {



props.delete(id)

}
 
return (
    <div>
    <h4 className="orange corner menuSectionMargin centre-wide">{props.sectionName}</h4>
   
    <ul>
   {
 
  props.menuItems?.map( function(item, index) {

   return <li key={index}>
<MenuItem  id={index} menuItem={item} onDelete={handleClick}/>

 </li>
  




    

   })  


   
   }

   </ul> 
    </div>
  
)
};

export default MenuList;