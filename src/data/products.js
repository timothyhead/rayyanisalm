

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
const data =  JSON.parse(localStorage.getItem("Menu"))
console.log(data, "dfghjklhjklhjkl; data");
   
    

     

       


  

  


export default data
