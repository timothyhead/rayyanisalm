import React, { useEffect, useState } from "react";
import Menu from "./Menu";


function EditMenu(props) {

    const [sectionName, setSectionName] = useState("");
    const [mealName, setMealName] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [price, setPrice] = useState("")
     var [isClicked, setIsClicked] = useState(false);
     const [selectedFile, setSelectedFile] = useState();
     const [selectedModel, setSelectedModel] = useState();

  
    
const handleChange = event => {
    setSectionName(event.target.value)
    setSectionName((state) => {

     
      return state;
    });
  
}
const pull_data = (data) => {
  props.func(data)
};


useEffect(() => {
  setSectionName("Popular-Items")
 setMealName("")
 setBodyText("")
 setSelectedFile()
 setIsClicked(false)

  }, [])


  function handleClick() {

    console.log("meal name", mealName);
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
    console.log(reader.result);
    const img = {
      preview: URL.createObjectURL(file),
 result
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
    console.log(reader.result);
    const img = {
      preview: URL.createObjectURL(file),
 result
    }
    setSelectedModel(img)
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}




   


    return (
      <div className="edit-menu-div" id="scroll-div">
        <div className="centre border-red corner form-div silk"> 
        <div className="form-inner-div orange inline corner" >
<h1 className="green corner centre-text">Create and Edit Menu</h1>






<form >

      <label  className="form-input-width" >Enter Section Name:
       
        <select  className="form-input-width margin-left-5px" value={sectionName} onChange={handleChange}>
        <option  value="Popular-Items">Popular Items</option>
        <option   value="Cold-Dishes">Cold Dishes</option>
        <option  value="Hot-Dishes">Hot Dishes</option>
        <option   value="Mushimo">Mushimo</option>
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
      </select>
      </label>
      <label className="block">Enter Meal Name:
        <input className="form-input-width margin-left-25px"
          type="text" 
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
      </label>
      <label className="block">Enter Body Text:
        <textarea className="form-input-width margin-left-34px"
          type="text" 
          value={bodyText}
          onChange={(e) => setBodyText(e.target.value)}
        />
      </label>
      <label className="block"> Enter price:
      <input className="form-input-width margin-left-25px"
          type="number" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
  <label>Select 3d model file
  <input  className="margin-left" type="file" name="file" onChange={changeHandler2} />
  </label>
  <label className="block">Select thumbnail image file
  <input  className="margin-left" type="file" name="file" onChange={changeHandler1} />
  </label>
 
    </form>
    <div>
    {selectedFile ? <img class="image100 centre" src={selectedFile.preview} alt="placeholder"></img>: null }
    
    </div>
   
    </div>

    <div className="instruction-box-spacer-div corner">

    </div>
     <div className="info-box-and-add-button">
      <div className="add-button-div ">
<button onClick={() => {
handleClick()
}}>ADD</button>
      </div>
    <div className="instruction-box-div green corner">
<h5>Fill out the form to edit the menu. When done click to set the menu at the bottom</h5>
</div>

 </div>



 
        </div>
        <div className="to-retaurant-app-menu-div">
        <Menu isRedBorder={true} mealName={mealName} bodyText={bodyText} image={selectedFile} model={selectedModel} price={Number(price)} section={sectionName} add={isClicked}  func={pull_data}/>
        </div>
        <div>
</div>
    
        </div>
    )
};
export default EditMenu;