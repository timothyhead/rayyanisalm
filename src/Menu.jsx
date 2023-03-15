
import React, { useEffect, useRef, useState} from "react";
import MenuList from "./MenuList";
import PublicMenu from "./PublicMenu";





function Menu(props) {

    const [popularItems, setPopularItems] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String
        }]);
    const [coldDishes, setcoldDishes] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String
       }]);
    const [hotDishes, sethotDishes] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
    const [mushimo, setMushimo] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
    const [yakiOnigiri, setYakiOnigiri] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
    }]);
       
    const [donburi, setDonburi] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [robata, setRobata] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [nabe, setNabe] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [sushi, setSushi] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [omakaseSashimi, setOmakaseSashimi] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [assortedSashimi, setAssortedSashimi] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [sushiCombinations, setSushiCombinations] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [veggieRoll, setVeggieRoll] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [rolls, setRolls] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [nonAlcholicBeverages, setNonAlcholicBeverages] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [beerSake, setBeerSake] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [partyCombinationTray, setPartyCombinationTray] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [utensils, setUtensils] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);
       const [ramen, setRamen] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image:  String
       }]);   
       const [aClass, setAClass]  = useState()
       var [menuArray, setMenuArray] = useState([{menuItem: [],
        detail: [],
        sectionName: "",
        isSet: false
        }]);
      var [isSet, setIset] = useState(false);
      const [menu, setMenu]  = useState([]);
      const [images , setImages]  = useState([]);
      const [allData, setAllData] = useState({});
      const [formData, setFormData] = useState();
      const [newMenu, setNewMenu] = useState([]);
  
      const ref = useRef(null);

    

useEffect(() => {
    setAllData({"menu": menu, "images": images})
   
}, [images])







   useEffect(() => {

   setAClass("silk corner flex-container-vertical border-red edit-menus-menu-div") 

        
if (props.mealName != "") {
    populateMenu(props) 
    console.log("Hello populate menu");
  
}
       
 
   }, [props.add])

  
    function populateMenu(props) {
        console.log(props.section, "section", props.mealName);
        switch (props.section) {

       
          
            case "Popular-Items":
               console.log("popular");
                setPopularItems((preValue) => {
               
                    return [...preValue, {
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview], price: props.price,  section: "Popular-Items"
                    }]
                  
                });
             break;
            case "Cold-Dishes":
                setcoldDishes((preValue) => {
                    return    [...preValue,{
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview], price: props.price , section: "Cold-Dishes"
                       
                                 
                                
                             }];
                      
                });
            break;
            case "Hot-Dishes":
                sethotDishes((preValue) => {
                    return    [...preValue,{
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview], price: props.price , section: "Hot-Dishes"
                       
                                 
                                
                             }];
                  
                });
            break;
            case "Mushimo":
                setMushimo((preValue) => {
                    return    [...preValue,{
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview], price: props.price , section: "Mushimo"
                       
                                 
                                
                             }];
                });
            break;
            case "Yaki-Onigiri":
    
             setYakiOnigiri((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Yaki-Onigiri"
                   
                             
                            
                         }];
                }) ;
            break;
          case "Donburi":
            setDonburi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Donburi"
                   
                             
                            
                         }];
            });
        break;
        case "Robata":
            setRobata((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Robata"
                   
                             
                            
                         }];
            });
        break;
        case "Nabe":
            setNabe((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Nabe"
                   
                             
                            
                         }];
            });
        break;
        case "Sushi":
            setSushi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Sushi"
                   
                             
                            
                         }];
            });
        break;
        case "Omakase-Sashimi":
            setOmakaseSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Omakase-Sashimi"
                   
                             
                            
                         }];
            });
        break;
        case "Assorted-Sashimi":
            setAssortedSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Assorted-Sashimi"
                   
                             
                            
                         }];
            });
        break;
        case "Sushi-Combinations":
            setAssortedSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Sushi-Combinations"
                   
                             
                            
                         }];
            });
        break;
        case "Veggie-Roll":
            setVeggieRoll((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Veggie-Roll"
                   
                             
                            
                         }];
            });
        break;
        case "Rolls":
            setRolls((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Rolls"
                   
                             
                            
                         }];
            });
        break;
        case "Non-Alcholic-Beverages":
            setNonAlcholicBeverages((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Non-Alcholic-Beverages"
                   
                             
                            
                         }];
            });
        break;
        case "Beer-&-Sake":
            setBeerSake((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Beer-&-Sake"
                   
                             
                            
                         }];
            });
        break;
        case "Party-Combination-Tray":
            setPartyCombinationTray((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Party-Combination-Tray"
                   
                             
                            
                         }];
            });
        break;
        case "Utensils":
            setMushimo((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Utensils"
                   
                             
                            
                         }];
            });
        break;
        case "Ramen":
            setRamen((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview], price: props.price , section: "Ramen"
                   
                             
                            
                         }];
            });
        default: 
        break
    
        
       
       
     }
     setMenu(preValue => {
        return [...preValue, {mealName: props.mealName, bodyText: props.bodyText, price: props.price, section: props.section, image:  props.image?.result}]
        
     });
    }
    




 async function handleSet(event) {
//   console.log("Set");

     props.set(menu) 
     setPopularItems([])
     setcoldDishes([])
     sethotDishes([])
     setMushimo([])
     setYakiOnigiri([])
     setDonburi([])
     setRobata([])
     setNabe([])
     setSushi([])
     setOmakaseSashimi([])
     setAssortedSashimi([])
     setSushiCombinations([])
     setVeggieRoll([])
     setRolls([])
     setNonAlcholicBeverages([])
     setBeerSake([])
     setPartyCombinationTray([])
     setUtensils([])
     setRamen([])
     props.func(menu, "Hello menu")
    
//saveMenu()
//     const anotherResponse = await fetch("https://localhost:8080", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         body: JSON.stringify({"menu" : menu}),
       

//     })
//    setMenu([])


  
 

 }
function resetOutGoingMenuArrayToBackend() {
    console.log("Here");
    setMenu([]);
    setPopularItems((state) => {
        console.log(state);
        state.forEach((item) => {
            setMenu(preValue => {
                return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
             });
        })
        return state
    })
    setcoldDishes((state) => {
        console.log(state);
        state.forEach((item) => {
            setMenu(preValue => {
                return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
             });
        })
        return state
    })
    sethotDishes((state) => {
        console.log(state);
        state.forEach((item) => {
            setMenu(preValue => {
                return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
             });
        })
        return state
    })
}
    // setSides((state) => {
    //     console.log(state);
    //     state.forEach((item) => {
    //         setMenu(preValue => {
    //             return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
    //          });
    //     })
    //     return state
    // })
    // setSpecalties((state) => {
    //     console.log(state);
    //     state.forEach((item) => {
    //         setMenu(preValue => {
    //             return [{mealName: item.menuItem[0], bodyText:  item.menuItem[1],image: item.detail[0], detailText: item.detail[1], price: item.price,section: item.section}]
                
    //          });
    //     })
    //     return state
    // })
 

function deletePopularItems(id) {
    setPopularItems(preValue => {
        return preValue.filter((item, index) => {
        
        
          return index !== id;
      
         })
      })
    }
    function deletecoldDishes(id) {
       setcoldDishes(preValue => {
            return preValue.filter((item, index) => {
            
            
              return index !== id;
          
             })
          })
        }
        function deletehotDishes(id) {
            sethotDishes(preValue => {
                return preValue.filter((item, index) => {
                
                
                  return index !== id;
              
                 })
              })
            }
            function deleteMushimo(id) {
                setMushimo(preValue => {
                    return preValue.filter((item, index) => {
                    
                    
                      return index !== id;
                  
                     })
                  })
                }
                function deleteYakiOnigiri(id) {
                    setYakiOnigiri(preValue => {
                        return preValue.filter((item, index) => {
                        
                        
                          return index !== id;
                      
                         })
                      })
                    }
                    function deleteDonburi(id) {
                        setDonburi(preValue => {
                            return preValue.filter((item, index) => {
                            
                            
                              return index !== id;
                          
                             })
                          })
                        }
                        function deleteRobata(id) {
                            setRobata(preValue => {
                                return preValue.filter((item, index) => {
                                
                                
                                  return index !== id;
                              
                                 })
                              })
                            }
                            function deleteNabe(id) {
                                setNabe(preValue => {
                                    return preValue.filter((item, index) => {
                                    
                                    
                                      return index !== id;
                                  
                                     })
                                  })
                                }
                                function deleteSushi(id) {
                                   setSushi(preValue => {
                                        return preValue.filter((item, index) => {
                                        
                                        
                                          return index !== id;
                                      
                                         })
                                      })
                                    }
                                    function deleteOmakaseSashimi(id) {
                                        setOmakaseSashimi(preValue => {
                                            return preValue.filter((item, index) => {
                                            
                                            
                                              return index !== id;
                                          
                                             })
                                          })
                                        }
                                        function deleteAssortedSashimi(id) {
                                            setAssortedSashimi(preValue => {
                                                return preValue.filter((item, index) => {
                                                
                                                
                                                  return index !== id;
                                              
                                                 })
                                              })
                                            }
                                            function deleteSushiCombinations(id) {
                                                setSushiCombinations(preValue => {
                                                    return preValue.filter((item, index) => {
                                                    
                                                    
                                                      return index !== id;
                                                  
                                                     })
                                                  })
                                                }
                                                function deleteVeggieRoll(id) {
                                                    setVeggieRoll(preValue => {
                                                        return preValue.filter((item, index) => {
                                                        
                                                        
                                                          return index !== id;
                                                      
                                                         })
                                                      })
                                                    }
                                                    function deleteRolls(id) {
                                                        setRolls(preValue => {
                                                            return preValue.filter((item, index) => {
                                                            
                                                            
                                                              return index !== id;
                                                          
                                                             })
                                                          })
                                                        }
                                                        function deleteNonAlcholicBeverages(id) {
                                                            setNonAlcholicBeverages(preValue => {
                                                                return preValue.filter((item, index) => {
                                                                
                                                                
                                                                  return index !== id;
                                                              
                                                                 })
                                                              })
                                                            }
                                                            function deleteBeerSake(id) {
                                                              setBeerSake(preValue => {
                                                                    return preValue.filter((item, index) => {
                                                                    
                                                                    
                                                                      return index !== id;
                                                                  
                                                                     })
                                                                  })
                                                                }
                                                                function deletePartyCombinationTray(id) {
                                                                    setPartyCombinationTray(preValue => {
                                                                        return preValue.filter((item, index) => {
                                                                        
                                                                        
                                                                          return index !== id;
                                                                      
                                                                         })
                                                                      })
                                                                    }
                                                                    function deleteUtensils(id) {
                                                                       setUtensils(preValue => {
                                                                            return preValue.filter((item, index) => {
                                                                            
                                                                            
                                                                              return index !== id;
                                                                          
                                                                             })
                                                                          })
                                                                        }
                                                                        function deleteRamen(id) {
                                                                            setRamen(preValue => {
                                                                                return preValue.filter((item, index) => {
                                                                                
                                                                                
                                                                                  return index !== id;
                                                                              
                                                                                 })
                                                                              })
                                                                            }




    return (
        <div className={aClass}>
<h1 className="corner green">Menu</h1>
<section className="menu-div">

<MenuList sectionName="Popular Items" menuItems={popularItems} delete={deletePopularItems}/>
<MenuList sectionName="Cold Dishes" menuItems={coldDishes} delete={deletecoldDishes}/>
<MenuList sectionName="Hot Dishes" menuItems={hotDishes} delete={deletehotDishes}/>
<MenuList sectionName="Mushimo" menuItems={mushimo} delete={deleteMushimo}/>
<MenuList sectionName="Yaki Onigiri"  menuItems={yakiOnigiri} delete={deleteYakiOnigiri}/>
<MenuList sectionName="Donburi"  menuItems={donburi} delete={deleteDonburi}/>
<MenuList sectionName="Robata"  menuItems={robata} delete={deleteRobata}/>
<MenuList sectionName="Nabe"  menuItems={nabe} delete={deleteNabe}/>
<MenuList sectionName="Sushi"  menuItems={sushi} delete={deleteSushi}/>
<MenuList sectionName="Omakase Sashimi"  menuItems={omakaseSashimi} delete={deleteOmakaseSashimi}/>
<MenuList sectionName="Assorted Sashimi"  menuItems={assortedSashimi} delete={deleteAssortedSashimi}/>
<MenuList sectionName="Sushi Combinations"  menuItems={sushiCombinations} delete={deleteSushiCombinations}/>
<MenuList sectionName="Veggie Roll"  menuItems={veggieRoll} delete={deleteVeggieRoll}/>
<MenuList sectionName="Rolls"  menuItems={rolls} delete={deleteRolls}/>
<MenuList sectionName="Non Alcholic Beverages"  menuItems={nonAlcholicBeverages} delete={deleteNonAlcholicBeverages}/>
<MenuList sectionName="Beer & Sake"  menuItems={beerSake} delete={deleteBeerSake}/>
<MenuList sectionName="Party Combination Tray"  menuItems={partyCombinationTray} delete={deletePartyCombinationTray}/>
<MenuList sectionName="Utensils"  menuItems={utensils} delete={deleteUtensils}/>
<MenuList sectionName="Ramen"  menuItems={ramen} delete={deleteRamen}/>

{props.isRedBorder ? 

<button ref={ref} id="set-menu-button" onClick={handleSet}>Set Menu</button> : null}

     
</section>

        </div>
    )
};


export default Menu;