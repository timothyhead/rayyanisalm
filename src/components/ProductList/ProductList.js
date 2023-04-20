import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import { Container, Row, Col } from 'react-bootstrap';

const sections = [{sectionName: "Popular-Items",
                     ids: "goto1"            },
                     {sectionName: "Cold-Dishes",
                     ids : "goto2"            },
                     {sectionName: "Hot-Dishes",
                     ids: "goto3"            },
                     {sectionName: "Mushimono",
                     ids: "goto4"
                     },
                     {sectionName: "Yaki-Onigiri",
                     ids: "goto5"            },
                     {sectionName: "Donburi",
                     ids : "goto6"            },
                     {sectionName: "Robata",
                     ids: "goto7"            },
                     {sectionName: "Nabe",
                     ids: "goto8"            },
                     {sectionName: "Sushi",
                     ids : "goto9"            },
                     {sectionName: "Omakase-Sashimi",
                     ids: "goto10"            },
                     {sectionName: "Assorted-Sashimi",
                     ids: "goto11"            },
                     {sectionName: "Sushi-Combinations",
                     ids : "goto12"            },
                     {sectionName: "Veggie-Roll",
                     ids: "goto13"            },
                     {sectionName: "Rolls",
                     ids: "goto14"            },
                     {sectionName: "Non-Alcholic-Beverages",
                     ids : "goto15"            },
                     {sectionName: "Beer-&-Sake",
                     ids: "goto16"            },
                     {sectionName: "Party-Combination-Tray",
                     ids: "goto17"            },
                     {sectionName: "Utensils",
                     ids : "goto18"            },
                     {sectionName: "Ramen",
                     ids: "goto19"            }
                    ]

                   // products
const ProductList = ( props ) => {
     
    const  [retrivedData, setRetrivedData] = useState();
    const [idOfRemoved, setIdOfRemoved] = useState();
  


// get data from backend to load product list
 useEffect(() => {
   fetch("https://lofty-golden-myth.glitch.me/loadMenu")
    .then( res =>  {
 
return res.json() 
    
    })
   
    .then((data) => {
 
 setRetrivedData(data)
   
     
    })
    .catch((err) => {
       console.log(err.message);
       console.log("error");
 
    });

 }, [])
 useEffect(() => {
console.log("retd id", retrivedData);
 }, [retrivedData])
 useEffect(() => {
    setIdOfRemoved(props.idOfRemoved)
 }, [props.idOfRemoved])

 useEffect(() => {
props.pull_retrivedData(retrivedData)
 }, [retrivedData, props])

// pull data from product.js
function pull_data(data) {
props.productData(data)

}




    return (
     

     
       <div>
        <div className='scrollmenu'>
        
    
     <a href="#goto1" className="sliding-link">Popular Items</a>
     <a href="#goto2" className="sliding-link">Cold Dishes</a>
     <a href="#goto3" className="sliding-link">Hot Dishes</a>
     <a href="#goto4" className="sliding-link">Mushimono</a>
     <a href="#goto5" className="sliding-link">Yaki Onigiri</a>
     <a href="#goto6" className="sliding-link">Donburi</a>
     <a href="#goto7" className="sliding-link">Robata</a>
     <a href="#goto8" className="sliding-link">Nabe</a>
     <a href="#goto9" className="sliding-link">Sushi</a>
     <a href="#goto10" className="sliding-link">Omakase sashimi</a>
     <a href="#goto11" className="sliding-link">Assorted Sashimi</a>
     <a href="#goto12" className="sliding-link">sushiCombinations</a>
     <a href="#goto13" className="sliding-link">Veggie Roll</a>
     <a href="#goto14" className="sliding-link">Roll</a>
     <a href="#goto15" className="sliding-link">Non_Alcohoilic Beverages</a>
     <a href="#goto16" className="sliding-link">Beer & Sake</a>
     <a href="#goto17" className="sliding-link">Party Combination Tray</a>
     <a href="#goto18" className="sliding-link">Utensils</a>
     <a href="#goto19" className="sliding-link">Ramen</a>
     </div>
   
      
{sections.map((section) => {
  
    return <div key={section.ids}>
 
 <h3 id={section.ids}>{section.sectionName}</h3>

 <ul>

 <Container key={section.ids}>
              <Row key={section.ids}>
            
        {retrivedData?.map((product) => (
        
          
            (product?.section === section.sectionName)  &&
           
            <Row key={product.id} xs="auto" sm="auto" md="auto" lg="auto" xl="auto" >
                <Col  key={product.id}>
             
        <Product  key={product.id} {...product} func={pull_data} cart={props.cart}  pullRetrivedData={retrivedData} idOfRemoved={idOfRemoved}/>
        
        </Col>
    </Row>
   
            
        ))}
   
       
              </Row>
            </Container>
        
        
      </ul>
</div>

})}




        </div>
       
    );
    
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
