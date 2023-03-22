import React, { useEffect } from 'react';
import PropTypes, { element } from 'prop-types';
import Product from '../../containers/Product';
import { Container, Row, Col} from 'react-bootstrap';

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
var element_to_scroll_to = document.getElementById('anchorName2');

const ProductList = ({ products }) => {
    useEffect(()=> {
        console.log("Hello data", products[0]);
    }, [products])
    return (
     

     
       <div>
        <div className='scrollmenu'>
        
    
     <a href="#goto1" class="sliding-link">Popular Items</a>
     <a href="#goto2" class="sliding-link">Cold Dishes</a>
     <a href="#goto3" class="sliding-link">Hot Dishes</a>
     <a href="#goto4" class="sliding-link">Mushimono</a>
     <a href="#goto5" class="sliding-link">Yaki Onigiri</a>
     <a href="#goto6" class="sliding-link">Donburi</a>
     <a href="#goto7" class="sliding-link">Robata</a>
     <a href="#goto8" class="sliding-link">Nabe</a>
     <a href="#goto9" class="sliding-link">Sushi</a>
     <a href="#goto10" class="sliding-link">Omakase sashimi</a>
     <a href="#goto11" class="sliding-link"></a>
     <a href="#goto12" class="sliding-link">Assorted Sashimi</a>
     <a href="#goto13" class="sliding-link">Veggie Roll</a>
     <a href="#goto14" class="sliding-link">Roll</a>
     <a href="#goto15" class="sliding-link">Non_Alcohoilic Beverages</a>
     <a href="#goto16" class="sliding-link">Beer & Sake</a>
     <a href="#goto17" class="sliding-link">Party Combination Tray</a>
     <a href="#goto18" class="sliding-link">Utensils</a>
     <a href="#goto19" class="sliding-link">Ramen</a>
     </div>
   
      
{sections.map((section) => {
  
    return <div>
    
 <h3 id={section.ids}>{section.sectionName}</h3>

 <ul>
 <Container>
              <Row>
        {products.map(product => (
            
           
            product.section === section.sectionName  &&
         
                <Col className="col-lg-6 col-md-6 col-sm-12" key={product.id}>
              
   
        <Product {...product} />
        </Col>
      
            
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
