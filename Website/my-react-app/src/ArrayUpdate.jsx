
import React, { useState } from "react";

function ArrayUpdate()
{

  const [foods , setFoods]  = useState(["Apple"  , "Orange" , "Banana"]);

  function handleAddFood ()
  {
const newFood = document.getElementById("foodInput").value;
document.getElementById("foodInput").value = ""; // Clear the input field

setFoods(f=>[...f,newFood]); // Add the new food to the beginning of the array

  }

  function handleRemoveFood (index)
  {
setFoods(foods.filter((_,i)=>i !== index));
  }
  
 
 

  return (
  <div>
    <h2>LIST OF FOOD</h2>
    <ul>
        {foods.map((food , index) => <li key={index}  
        onClick={() => handleRemoveFood(index)}>{food}</li>)}
    </ul>
     

    <input type="text" id="foodInput" placeholder="Enter food name"/>
    <button onClick={handleAddFood}>Add Food</button>
  </div>

  )

}

export default ArrayUpdate;