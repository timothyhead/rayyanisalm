
import React, { useEffect, useRef, useState} from "react";
import MenuList from "./MenuList";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';






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
    const [mushimono, setMushimono] = useState([{menuItem:  [],
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

  
      const ref = useRef(null);

      const [menu, setMenu] = useState([{ menuItem:  [],
        detail: [], 
        sectionName: "Popular-Items",
        image: String,
        model: String
        }])
  var id = useRef(0)
    const [retriveData, setRetriveData] = useState([])
    const [add, setAdd] = useState(false);
     


      useEffect(() => {
        



     fetch("https://lofty-golden-myth.glitch.me/loadMenu")
        .then( res =>  {
     
   return res.json() 
        
        })
       
        .then((data) => {
     
    setRetriveData(data)
       
         
        })
        .catch((err) => {
           console.log(err.message);
           console.log("error");
     
        });
      }, [])

    

useEffect(() => {
 

    
  let recoveredMenu = retriveData
  repopulateMenu(retriveData);
;
 setMenu(recoveredMenu);
   
}, [retriveData])

useEffect(() => {
setAdd(true)
}, [props.add]) ;
useEffect(() => {
setAdd(false)
}, [])

   useEffect(() => {

    
    if (props.mealName !== "" && add === true) {
        populateMenu(props) 
        setAdd(false)
    }
       
 
   }, [add, props])

   useEffect(() => {
   

 
    menu?.length > 0 ? localStorage.setItem("Menu", JSON.stringify(menu)) : localStorage.setItem("Menu", JSON.stringify([{ menuItem:  [],
        detail: [], 
        sectionName: "Popular-Items",
        image: String,
        model: String
        }]));
        menu?.length > 0 ? localStorage.setItem("id", JSON.stringify(id)) : localStorage.setItem("id", JSON.stringify(0))
   }, [menu])
    function populateMenu(props) {

       id.current ++
        setMenu(preValue => {
           return [...preValue, {mealName: props.mealName, bodyText: props.bodyText, price: props.price, section: props.section, image:  props.image?.preview, model: props.model?.preview , id: id.current, currency: "$"}]
           
        });
        switch (props.section) {

       
          
            case "Popular-Items":
             
                setPopularItems((preValue) => {
               
                    return [...preValue, {
                        menuItem:  [props.mealName, props.bodyText],
                        detail: [props.image?.preview, props.model?.preview], price: props.price,  section: "Popular-Items", id: id.current
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
            case "Mushimono":
                setMushimono((preValue) => {
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
            setSushiCombinations((preValue) => {
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
            setUtensils((preValue) => {
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

   
    }


    function repopulateMenu(recoveredMenu) {

id.current = 0
     
      recoveredMenu?.forEach(element => {
          
  id.current ++
        switch (element.section) {

       
          
            case "Popular-Items":
              
                setPopularItems((preValue) => {
               
                    return [...preValue, {
                        menuItem:  [element.mealName, element.bodyText],
                        detail: [element.image, element.model], price: element.price,  section: "Popular-Items", id: id
                    }]
                  
                });
             break;
            case "Cold-Dishes":
                setcoldDishes((preValue) => {
                    return    [...preValue,{
                        menuItem:  [element.mealName, element.bodyText],
                        detail: [element.image, element.model], price: element.price , section: "Cold-Dishes"
                       
                                 
                                
                             }];
                      
                });
            break;
            case "Hot-Dishes":
                sethotDishes((preValue) => {
                    return    [...preValue,{
                        menuItem:  [element.mealName, element.bodyText],
                        detail: [element.image, element.model], price: element.price , section: "Hot-Dishes"
                       
                                 
                                
                             }];
                  
                });
            break;
            case "Mushimono":
                setMushimono((preValue) => {
                    return    [...preValue,{
                        menuItem:  [element.mealName, element.bodyText],
                        detail: [element.image, element.model], price: element.price , section: "Mushimo"
                       
                                 
                                
                             }];
                });
            break;
            case "Yaki-Onigiri":
    
             setYakiOnigiri((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Yaki-Onigiri"
                   
                             
                            
                         }];
                }) ;
            break;
          case "Donburi":
            setDonburi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Donburi"
                   
                             
                            
                         }];
            });
        break;
        case "Robata":
            setRobata((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Robata"
                   
                             
                            
                         }];
            });
        break;
        case "Nabe":
            setNabe((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Nabe"
                   
                             
                            
                         }];
            });
        break;
        case "Sushi":
            setSushi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Sushi"
                   
                             
                            
                         }];
            });
        break;
        case "Omakase-Sashimi":
            setOmakaseSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Omakase-Sashimi"
                   
                             
                            
                         }];
            });
        break;
        case "Assorted-Sashimi":
            setAssortedSashimi((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Assorted-Sashimi"
                   
                             
                            
                         }];
            });
        break;
        case "Sushi-Combinations":
            setSushiCombinations((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Sushi-Combinations"
                   
                             
                            
                         }];
            });
        break;
        case "Veggie-Roll":
            setVeggieRoll((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Veggie-Roll"
                   
                             
                            
                         }];
            });
        break;
        case "Rolls":
            setRolls((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Rolls"
                   
                             
                            
                         }];
            });
        break;
        case "Non-Alcholic-Beverages":
            setNonAlcholicBeverages((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Non-Alcholic-Beverages"
                   
                             
                            
                         }];
            });
        break;
        case "Beer-&-Sake":
            setBeerSake((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Beer-&-Sake"
                   
                             
                            
                         }];
            });
        break;
        case "Party-Combination-Tray":
            setPartyCombinationTray((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Party-Combination-Tray"
                   
                             
                            
                         }];
            });
        break;
        case "Utensils":
            setUtensils((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Utensils"
                   
                             
                            
                         }];
            });
        break;
        case "Ramen":
            setRamen((preValue) => {
                return    [...preValue,{
                    menuItem:  [element.mealName, element.bodyText],
                    detail: [element.image, element.model], price: element.price , section: "Ramen"
                   
                             
                            
                         }];
            });
            break
        default: 
        break
    
        
       
       
     }
    });
};
   


 async function handleSet(event) {

 
console.log("menu", menu);
  await fetch("https://lofty-golden-myth.glitch.me/storedMenu", {
        method: "POST",
        headers: {
              "Access-Control-Allow-Methods": 'OPTIONS,POST,GET', // this states the allowed methods
            "Content-Type": "application/json", // this shows the expected content type
            "Access-Control-Allow-Origin": "https://lofty-golden-myth.glitch.me" 
        },
        body: JSON.stringify({"menu" : menu}),
       

    })
 
     props.func(menu)
    




 
 

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
            function deleteMushimono(id) {
                setMushimono(preValue => {
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
setRetriveData([])
    setMenu([]);
    setPopularItems([])
    setcoldDishes([])
    sethotDishes([])
    setMushimono([])
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
        <div>
     
 <h1 className="corner green">Menu</h1>

<Stack gap={2} className="col-md-12 col-lg-12 col-sm-12 col-xs-12 mx-auto">
<MenuList sectionName="Popular Items" menuItems={popularItems} delete={deletePopularItems}/>
<MenuList sectionName="Cold Dishes" menuItems={coldDishes} delete={deletecoldDishes}/>
<MenuList sectionName="Hot Dishes" menuItems={hotDishes} delete={deletehotDishes}/>
<MenuList sectionName="Mushimono" menuItems={mushimono} delete={deleteMushimono}/>
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



<div className="mb-2 centre-buttons">

<Button className="centre-buttons" ref={ref} id="set-menu-button"   size="lg" onClick={handleSet}>Set Menu</Button> 
<Button className="centre-buttons" variant="outline-danger"  size="lg" onClick={clear}>CLEAR</Button>
</div>

         </Stack>
</div>
)};


export default Menu;