import React, { useEffect } from "react";

function PublicMenu(props) {
const arr = [1,1,2,3]



 return (
    <div>
        <ul>{
              
           props?.menuArray?.map((item) => {
        return <h1>{item.mealName}</h1>
            })
        }
      
        </ul>
    </div>
 )

};
export default PublicMenu;