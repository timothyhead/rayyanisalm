
import React, { useEffect, useRef, useState} from "react";
import MenuList from "./MenuList";






function Menu(props) {

    const [popularItems, setPopularItems] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
        }]);
    const [coldDishes, setcoldDishes] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
    const [hotDishes, sethotDishes] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
    const [mushimo, setMushimo] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
    const [yakiOnigiri, setYakiOnigiri] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
    }]);
       
    const [donburi, setDonburi] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [robata, setRobata] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [nabe, setNabe] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [sushi, setSushi] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [omakaseSashimi, setOmakaseSashimi] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [assortedSashimi, setAssortedSashimi] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [sushiCombinations, setSushiCombinations] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [veggieRoll, setVeggieRoll] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [rolls, setRolls] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [nonAlcholicBeverages, setNonAlcholicBeverages] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [beerSake, setBeerSake] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [partyCombinationTray, setPartyCombinationTray] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [utensils, setUtensils] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);
       const [ramen, setRamen] = useState([{menuItem:  [],
        detail: [], 
        sectionName: "",
        image: String,
        model: String
       }]);   
       const [aClass, setAClass]  = useState()
  
      const ref = useRef(null);

      const [menu, setMenu] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "Popular-Items",
        image: String,
        model: String
        }])
     
    

      

    

useEffect(() => {
 
 
  let recoveredMenu = JSON.parse(localStorage.getItem("Menu"))
  repopulateMenu(recoveredMenu);
 setMenu(recoveredMenu);
   
}, [])



   useEffect(() => {

   setAClass("silk corner flex-container-vertical border-red edit-menus-menu-div") 

        
if (props.mealName !== "") {
    populateMenu(props) 
    console.log("Hello populate menu");
  
}
       
 
   }, [props.add], [props])

  
    function populateMenu(props) {
        console.log(props.section, "section", props.mealName);
        switch (props.section) {

       
          
            case "Popular-Items":
               console.log("popular");
                setPopularItems((preValue) => {
               
                    return [...preValue, {
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview, props.model?.preview], price: props.price,  section: "Popular-Items"
                    }]
                  
                });
             break;
            case "Cold-Dishes":
                setcoldDishes((preValue) => {
                    return    [...preValue,{
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Cold-Dishes"
                       
                                 
                                
                             }];
                      
                });
            break;
            case "Hot-Dishes":
                sethotDishes((preValue) => {
                    return    [...preValue,{
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Hot-Dishes"
                       
                                 
                                
                             }];
                  
                });
            break;
            case "Mushimo":
                setMushimo((preValue) => {
                    return    [...preValue,{
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Mushimo"
                       
                                 
                                
                             }];
                });
            break;
            case "Yaki-Onigiri":
    
             setYakiOnigiri((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Yaki-Onigiri"
                   
                             
                            
                         }];
                }) ;
            break;
          case "Donburi":
            setDonburi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Donburi"
                   
                             
                            
                         }];
            });
        break;
        case "Robata":
            setRobata((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Robata"
                   
                             
                            
                         }];
            });
        break;
        case "Nabe":
            setNabe((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Nabe"
                   
                             
                            
                         }];
            });
        break;
        case "Sushi":
            setSushi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Sushi"
                   
                             
                            
                         }];
            });
        break;
        case "Omakase-Sashimi":
            setOmakaseSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Omakase-Sashimi"
                   
                             
                            
                         }];
            });
        break;
        case "Assorted-Sashimi":
            setAssortedSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Assorted-Sashimi"
                   
                             
                            
                         }];
            });
        break;
        case "Sushi-Combinations":
            setAssortedSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Sushi-Combinations"
                   
                             
                            
                         }];
            });
        break;
        case "Veggie-Roll":
            setVeggieRoll((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Veggie-Roll"
                   
                             
                            
                         }];
            });
        break;
        case "Rolls":
            setRolls((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Rolls"
                   
                             
                            
                         }];
            });
        break;
        case "Non-Alcholic-Beverages":
            setNonAlcholicBeverages((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Non-Alcholic-Beverages"
                   
                             
                            
                         }];
            });
        break;
        case "Beer-&-Sake":
            setBeerSake((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Beer-&-Sake"
                   
                             
                            
                         }];
            });
        break;
        case "Party-Combination-Tray":
            setPartyCombinationTray((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Party-Combination-Tray"
                   
                             
                            
                         }];
            });
        break;
        case "Utensils":
            setMushimo((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Utensils"
                   
                             
                            
                         }];
            });
        break;
        case "Ramen":
            setRamen((preValue) => {
                return    [...preValue,{
                    menuItem:  [props.mealName, props.bodyText],
                    detail: [props.image?.preview, props.model?.preview], price: props.price , section: "Ramen"
                   
                             
                            
                         }];
            });
            break
        default: 
        break
    
        
       
       
     }
     setMenu(preValue => {
        return [...preValue, {mealName: props.mealName, bodyText: props.bodyText, price: props.price, section: props.section, image:  props.image?.result, model: props.model?.preview}]
        
     });
    }


    function repopulateMenu(menu) {
     
        menu.forEach(element => {
          
  
        switch (element.section) {

       
          
            case "Popular-Items":
              
                setPopularItems((preValue) => {
               
                    return [...preValue, {
                        menuItem:  [element.mealName, element.bodyText],
                        detail: [element.image?.preview, element.model?.preview], price: element.price,  section: "Popular-Items"
                    }]
                  
                });
             break;
            case "Cold-Dishes":
                setcoldDishes((preValue) => {
                    return    [...preValue,{
                        menuItem:  [element.mealName, element.bodyText],
                        detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Cold-Dishes"
                       
                                 
                                
                             }];
                      
                });
            break;
            case "Hot-Dishes":
                sethotDishes((preValue) => {
                    return    [...preValue,{
                        menuItem:  [element.mealName, element.bodyText],
                        detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Hot-Dishes"
                       
                                 
                                
                             }];
                  
                });
            break;
            case "Mushimo":
                setMushimo((preValue) => {
                    return    [...preValue,{
                        menuItem:  [element.mealName, element.bodyText],
                        detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Mushimo"
                       
                                 
                                
                             }];
                });
            break;
            case "Yaki-Onigiri":
    
             setYakiOnigiri((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Yaki-Onigiri"
                   
                             
                            
                         }];
                }) ;
            break;
          case "Donburi":
            setDonburi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Donburi"
                   
                             
                            
                         }];
            });
        break;
        case "Robata":
            setRobata((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Robata"
                   
                             
                            
                         }];
            });
        break;
        case "Nabe":
            setNabe((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Nabe"
                   
                             
                            
                         }];
            });
        break;
        case "Sushi":
            setSushi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Sushi"
                   
                             
                            
                         }];
            });
        break;
        case "Omakase-Sashimi":
            setOmakaseSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Omakase-Sashimi"
                   
                             
                            
                         }];
            });
        break;
        case "Assorted-Sashimi":
            setAssortedSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Assorted-Sashimi"
                   
                             
                            
                         }];
            });
        break;
        case "Sushi-Combinations":
            setAssortedSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Sushi-Combinations"
                   
                             
                            
                         }];
            });
        break;
        case "Veggie-Roll":
            setVeggieRoll((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Veggie-Roll"
                   
                             
                            
                         }];
            });
        break;
        case "Rolls":
            setRolls((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Rolls"
                   
                             
                            
                         }];
            });
        break;
        case "Non-Alcholic-Beverages":
            setNonAlcholicBeverages((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Non-Alcholic-Beverages"
                   
                             
                            
                         }];
            });
        break;
        case "Beer-&-Sake":
            setBeerSake((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Beer-&-Sake"
                   
                             
                            
                         }];
            });
        break;
        case "Party-Combination-Tray":
            setPartyCombinationTray((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Party-Combination-Tray"
                   
                             
                            
                         }];
            });
        break;
        case "Utensils":
            setMushimo((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Utensils"
                   
                             
                            
                         }];
            });
        break;
        case "Ramen":
            setRamen((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image?.preview, element.model?.preview], price: element.price , section: "Ramen"
                   
                             
                            
                         }];
            });
        default: 
        break
    
        
       
       
     }
    });
};
   


 async function handleSet(event) {


     props.set(menu) 
  
     props.func(menu)
    



menu?.length > 0 && localStorage.setItem("Menu", JSON.stringify(menu))
 

 }

 
function deleteFromMenu(item) {
setMenu(preValue => {
    return preValue.filter((menuItem, index) => {
      
return menuItem.mealName !== item.menuItem[0]
    })
})
};
function deletePopularItems(id) {
    setPopularItems(preValue => {
        return preValue.filter((item, index) => {

        if (index === id) {
          deleteFromMenu(item)
        }
       
          return index !== id;
      
         })
      })
     
    }

   useEffect(() => {
   

 
    menu.length > 0 ? localStorage.setItem("Menu", JSON.stringify(menu)) : localStorage.setItem("Menu", JSON.stringify([{ menuItem:  [],
        detail: [], 
        sectionName: "Popular-Items",
        image: String,
        model: String
        }]));
   }, [menu])
    function deletecoldDishes(id) {
       setcoldDishes(preValue => {
            return preValue.filter((item, index) => {
                 
                if (index === id) {
                    deleteFromMenu(item)
                  }
            
              return index !== id;
          
             })
          })
        }
        function deletehotDishes(id) {
            sethotDishes(preValue => {
                return preValue.filter((item, index) => {
                        
        
                    if (index === id) {
                        deleteFromMenu(item)
                      }
                
                  return index !== id;
              
                 })
              })
            }
            function deleteMushimo(id) {
                setMushimo(preValue => {
                    return preValue.filter((item, index) => {
                    
                            
                        if (index === id) {
                            deleteFromMenu(item)
                          }
              
                      return index !== id;
                  
                     })
                  })
                }
                function deleteYakiOnigiri(id) {
                    setYakiOnigiri(preValue => {
                        return preValue.filter((item, index) => {
                                
     
                            if (index === id) {
                                deleteFromMenu(item)
                              }
                          return index !== id;
                      
                         })
                      })
                    }
                    function deleteDonburi(id) {
                        setDonburi(preValue => {
                            return preValue.filter((item, index) => {
                            
                                    
                                if (index === id) {
                                    deleteFromMenu(item)
                                  }
              
                              return index !== id;
                          
                             })
                          })
                        }
                        function deleteRobata(id) {
                            setRobata(preValue => {
                                return preValue.filter((item, index) => {
                                        
        
                                    if (index === id) {
                                        deleteFromMenu(item)
                                      }
                                
                                  return index !== id;
                              
                                 })
                              })
                            }
                            function deleteNabe(id) {
                                setNabe(preValue => {
                                    return preValue.filter((item, index) => {
                                    
                                            
                                        if (index === id) {
                                            deleteFromMenu(item)
                                          }
              
                                      return index !== id;
                                  
                                     })
                                  })
                                }
                                function deleteSushi(id) {
                                   setSushi(preValue => {
                                        return preValue.filter((item, index) => {
                                        
                                                
                                            if (index === id) {
                                                deleteFromMenu(item)
                                              }
              
                                          return index !== id;
                                      
                                         })
                                      })
                                    }
                                    function deleteOmakaseSashimi(id) {
                                        setOmakaseSashimi(preValue => {
                                            return preValue.filter((item, index) => {
                                            
                                                    
                                                if (index === id) {
                                                    deleteFromMenu(item)
                                                  }
              
                                              return index !== id;
                                          
                                             })
                                          })
                                        }
                                        function deleteAssortedSashimi(id) {
                                            setAssortedSashimi(preValue => {
                                                return preValue.filter((item, index) => {
                                                
                                                        
                                                    if (index === id) {
                                                        deleteFromMenu(item)
                                                      }
              
                                                  return index !== id;
                                              
                                                 })
                                              })
                                            }
                                            function deleteSushiCombinations(id) {
                                                setSushiCombinations(preValue => {
                                                    return preValue.filter((item, index) => {
                                                    
                                                        if (index === id) {
                                                            deleteFromMenu(item)
                                                          }      
        
                                                      return index !== id;
                                                  
                                                     })
                                                  })
                                                }
                                                function deleteVeggieRoll(id) {
                                                    setVeggieRoll(preValue => {
                                                        return preValue.filter((item, index) => {
                                                        
                                                            if (index === id) {
                                                                deleteFromMenu(item)
                                                              }       
     
                                                          return index !== id;
                                                      
                                                         })
                                                      })
                                                    }
                                                    function deleteRolls(id) {
                                                        setRolls(preValue => {
                                                            return preValue.filter((item, index) => {
                                                                    
      
                                                                if (index === id) {
                                                                    deleteFromMenu(item)
                                                                  }
                                                              return index !== id;
                                                          
                                                             })
                                                          })
                                                        }
                                                        function deleteNonAlcholicBeverages(id) {
                                                            setNonAlcholicBeverages(preValue => {
                                                                return preValue.filter((item, index) => {
                                                                
                                                                    if (index === id) {
                                                                        deleteFromMenu(item)
                                                                      }       
      
                                                                  return index !== id;
                                                              
                                                                 })
                                                              })
                                                            }
                                                            function deleteBeerSake(id) {
                                                              setBeerSake(preValue => {
                                                                    return preValue.filter((item, index) => {
                                                                    
                                                                        if (index === id) {
                                                                            deleteFromMenu(item)
                                                                          }      
       
                                                                      return index !== id;
                                                                  
                                                                     })
                                                                  })
                                                                }
                                                                function deletePartyCombinationTray(id) {
                                                                    setPartyCombinationTray(preValue => {
                                                                        return preValue.filter((item, index) => {
                                                                        
                                                                            if (index === id) {
                                                                                deleteFromMenu(item)
                                                                              }
                                                                          return index !== id;
                                                                      
                                                                         })
                                                                      })
                                                                    }
                                                                    function deleteUtensils(id) {
                                                                       setUtensils(preValue => {
                                                                            return preValue.filter((item, index) => {
                                                                            
                                                                                if (index === id) {
                                                                                    deleteFromMenu(item)
                                                                                  }
                                                                              return index !== id;
                                                                          
                                                                             })
                                                                          })
                                                                        }
                                                                        function deleteRamen(id) {
                                                                            setRamen(preValue => {
                                                                                return preValue.filter((item, index) => {
                                                                                
                                                                                    if (index === id) {
                                                                                        deleteFromMenu(item)
                                                                                      }
                                                                                  return index !== id;
                                                                              
                                                                                 })
                                                                              })
                                                                            }

function clear() {
    localStorage.setItem("Menu", JSON.stringify([{ menuItem:  [],
        detail: [], 
        sectionName: "Popular-Items",
        image: String,
        model: String
        }]));
    setMenu([]);
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
};


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
<button className="destruct" onClick={clear}>CLEAR</button>

     
</section>

        </div>
    )
};


export default Menu;