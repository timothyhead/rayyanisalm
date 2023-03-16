import React from "react";

function PublicMenu(props) {

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