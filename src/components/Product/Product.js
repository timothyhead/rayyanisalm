import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Card} from 'react-bootstrap';
    

function Product(props) {

   
  
    
        const { mealName, price, bodyText, image,  model, id, func } = props;

        const [isInCart, setIsinCart] = useState(false);

        const [data, setData] = useState();

        const [modelData, setModelData] = useState();

       
        useEffect(() => {
            let url = model
            fetch(url)
            .then(res => res.blob())
            .then(y => setData(y))
        }, [model]);

        useEffect(() => {
            if (data) {
                setModelData(URL.createObjectURL(data) + "#callToAction=Add%20to%20cart&checkoutTitle=" + mealName + "&checkoutSubtitle=enjoy&price=" + price);
            }
        }, [data, mealName, price]);

useEffect(() => {
    if (document.getElementById(id) !== null) {
        const linkElement = document.getElementById(id);
        linkElement.addEventListener("message", function (event) {  
            if (event.data === "_apple_ar_quicklook_button_tapped")  {
                // Handle the user tap.   
               
                setIsinCart(isInCart => !isInCart)
            }
        }, false); 
    }
}, [id])
        
     
       useEffect(() => {
if (props.idOfRemoved === id) {
    setIsinCart(false)
}
    
       }, [props.idOfRemoved, id])

      
        
       
      useEffect(() => {

        if (isInCart) {
           func({
                isInCart: true,
                id: id
            })
          
        } else {
          func({
                isInCart: false,
                id: id
            })
          
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isInCart, id])
      const handleClick = () => {
          
        setIsinCart(isInCart => !isInCart)
               
            }
          
   
   
        return (
           
            <div className='margin-bottom-20'>
       
<Card >
                <Card.Body >
                    <Card.Title>{mealName}</Card.Title>
                    <Card.Text>{bodyText}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                
                </Card.Body>
             
               <Card>
           
           
               <Button variant={isInCart ? "danger" : "outline-primary"}     className={isInCart ? "no-transparency" : "transparency"}
                            onClick={handleClick}
                        > {isInCart ? 'Remove' : 'Add to cart'}</Button>
          
               <a rel="ar" id={id} href={modelData}>
         <Card.Img className='image-size' variant='bottom' src={image}></Card.Img>  
         
               </a>
   
              
              
               </Card>
             
            </Card>


   
            </div>
        );
    }

// }

export default Product;
