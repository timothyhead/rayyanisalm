import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Menu from "./Menu";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function EditMenu(props) {

    const [sectionName, setSectionName] = useState("");
    const [mealName, setMealName] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [price, setPrice] = useState("")
     var [isClicked, setIsClicked] = useState(false);
     const [selectedFile, setSelectedFile] = useState();
     const [selectedModel, setSelectedModel] = useState();
     const [storedPassword,  setStoredPassword] = useState()
    
  

  
    
const handleChange = event => {
    setSectionName(event.target.value)
    setSectionName((state) => {

     
      return state;
    });
  
}
const pull_data = (data) => {
  props.passUpPassword(data)
};


useEffect(() => {
  setSectionName("Popular-Items")
 setMealName("")
 setBodyText("")
 setSelectedFile()
 setIsClicked(false)
 props.sendUpIsInit(false)

  }, [])
 


  function handleClick() {

  setIsClicked(isClicked = !isClicked)

  setIsClicked((state) => {

    return state;
  });
 

  }

  

function changeHandler1(event){
  event.preventDefault()
  if (event.target.files.length !== 0)  {

  
 getBase64one(event.target.files[0])

}
}
function changeHandler2(event){
  event.preventDefault()
  if (event.target.files.length !== 0)  {

  
 getBase64two(event.target.files[0])

}

}
function getBase64one(file) {
  

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    let result = reader.result

    const img = {
      preview:  result
    }

    setSelectedFile(img)
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
function getBase64two(file) {
  

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    let result = reader.result

    const img = {
      preview: result
    }
    setSelectedModel(img)
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
//   const img = {
//     preview: file
//           }
//           setSelectedModel(img)

 }



function handlePassowordChange() {
  props.passUpPassword(storedPassword)
}





    return (
      <div  id="scroll-div">
      <div>
      <Form className="password-form-width">
      <Form.Group>
      <Form.Label>Change password</Form.Label>
      <Form.Control type="password" value={storedPassword} onChange={(e) => setStoredPassword(e.target.value)}/>
      <Button onClick={handlePassowordChange} size="lg">Update</Button>
      </Form.Group>
      </Form>
      </div>
      <Container>
      <Row>
        <Col xs="12" lg="10" md="10" sm="12">
        
     
   
        <div > 
        <div  >
<h1 className="green corner centre-text">Create and Edit Menu</h1>


  

<Form>


<Form.Select value={sectionName} onChange={handleChange}>
        <option value="Popular-Items">Popular Items</option>
        <option value="Cold-Dishes">Cold Dishes</option>
        <option value="Hot-Dishes">Hot Dishes</option>
        <option value="Mushimono" >Mushimono</option>
        <option value="Yaki-Onigiri">Yaki Onigiri</option>
        <option value="Donburi">Donbrui</option>
        <option value="Robata">Robata</option>
        <option value="Nabe">Nabe</option>
        <option value="Sushi">Sushi</option>
        <option value="Omakase-Sashimi">Omakase Sashimi</option>
        <option value="Assorted-Sashimi">Assorted Sashimi</option>
        <option value="Sushi-Combinations">Sushi Combinations</option>
        <option value="Veggie-Roll">Veggie Roll</option>
        <option value="Rolls">Rolls</option>
        <option value="Non-Alcholic-Beverages">Non Alcholic Beverages</option>
        <option value="Beer-&-Sake">Beer & Sake</option>
        <option value="Party-Combination-Tray">Party Combination Tray</option>
        <option value="Utensils">Utensils</option>
        <option value="Ramen">Ramen</option>
</Form.Select>
<Form.Group>
<Form.Label>Enter Meal Name:</Form.Label>
<Form.Control type="text" value={mealName} onChange={(e) => setMealName(e.target.value)}/>
<Form.Label>Enter Body Text:</Form.Label>
<Form.Control   as="textarea" rows={3} type="text" value={bodyText}  onChange={(e) => setBodyText(e.target.value)}/>
<Form.Label>Enter price:</Form.Label>
<Form.Control   type="number" value={price}  onChange={(e) => setPrice(e.target.value)}/>
<Form.Label>Select 3d model file</Form.Label>
<Form.Control   type="file" name="file"  onChange={changeHandler2}/>
<Form.Label>Select thumbnail image file</Form.Label>
<Form.Control   type="file" name="file"  onChange={changeHandler1}/>





</Form.Group>

</Form>



    <div>
    {selectedFile ? <img class="image-size centre" src={selectedFile.preview} alt="placeholder"></img>: null }
    
    </div>
   
    </div>
      </div>
    </Col>
    <Col xs="0" lg="2" md="2" sm="12">
    <div  >

    </div>
     <div >
      <div >
<Button className="z" onClick={() => {
handleClick()
}}>ADD</Button>
      </div>
    <div >
<h5>Fill out the form to edit the menu. When done click to set the menu at the bottom</h5>
</div>

 </div>
 
</Col>


      
        </Row>
        <Row>
       
        {/* <div className="to-retaurant-app-menu-div"> */}
        <Menu isRedBorder={true} mealName={mealName} bodyText={bodyText} image={selectedFile} model={selectedModel} price={Number(price)} section={sectionName} add={isClicked}  func={pull_data}/>
        {/* </div> */}
        </Row>
        <div>
</div>
 </Container>
    
        </div>
    )
};
export default EditMenu;