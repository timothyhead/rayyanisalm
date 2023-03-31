

import React, { useEffect, useState } from "react";
var myData = null


// const data = [
//   {
//     id: 1,
//     section: "Popular-Items",
//     name: 'Ohrensessel Josslyn',
//     price: 499.99,
//     currency: 'EUR',
//     image: '/images/01.jpg',
//   },
//   {
//     id: 2,
//     section: "Cold-Dishes",
//     name: 'Sessel Sofie',
//     price: 249.99,
//     currency: 'EUR',
//     image: '/images/02.jpg',
//   },
//   {
//     id: 4,
//     section: "Hot-Dishes",
//     name: 'Schlafsessel Rovigo',
//     price: 239.99,
//     currency: 'EUR',
//     image: '/images/04.jpg',
//   },
//   {
//     id: 6,
//     section: "Mushimo",
//     name: 'Sessel Little',
//     price: 119.99,
//     currency: 'EUR',
//     image: '/images/06.jpg',
//   },
//   {
//     id: 5,
//     section: "Popular-Items",
//     name: 'Sessel Peacock',
//     price: 599.99,
//     currency: 'EUR',
//     image: '/images/05.jpg',
//   },
//   {
//     id: 3,
//     section: "Popular-Items",
//     name: 'Popular-Items',
//     price: 149.99,
//     currency: 'EUR',
//     image: 'images/03.jpg',
//   }
// ];

 
// function Data(props) {
//  console.log("product.js data", props);

// JSON.parse(localStorage.getItem("Menu")).map((item, index) => {
//     return data.push({
//       id: index,
//       mealName: item.mealName,
//       section: item.sectionName
//     })

     //   })
     //JSON.parse(localStorage.getItem("Menu"))
   












// function retriveData() {
//   var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
//   window.msIndexedDB;
//   let open = indexedDB.open("MYMenuStoreDatabase1", 2);
//   open.onerror = function (event) {
//       console.error("Error", event);
//     };
//     open.onsuccess = function() {
//        let db  = open.result;
//       var transaction = db.transaction("menu", "readonly");
//        console.log("yes in products.js");
   
   
         
//            var store = transaction.objectStore("menu");
//          const getMenu =  store.get(1)
//         getMenu.onsuccess = function() {
//   localStorage.setItem("data2", JSON.stringify(getMenu.result.model))
 
//         // setData(getMenu.result.model)
//           console.log("data", getMenu.result.model,  JSON.parse(localStorage.getItem('data2')));
         
//            console.log(" databaseRecall", getMenu.result.model[1]);
  

           
//        };
//       open.onerror = (err)=> {
//         console.error(`Error to get menu data in product.js: ${err}`)
//     }
//        transaction.oncomplete = function() {
//         db.close()
//     };
//   };
// };
 
 const retriveData = JSON.parse(localStorage.getItem("menu2"));
 console.log("retriied data", JSON.parse(localStorage.getItem("menu2")));
export { retriveData }

  

   

    

     

       


  

  


