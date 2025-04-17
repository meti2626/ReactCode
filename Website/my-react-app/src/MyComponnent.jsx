import React, {useState} from 'react';

function MyComponent()
{

const [ name ,setName] = useState("Guest");
const [ age, setAge] = useState(0);
const [isEmployed, setEmployed] = useState(false);

const updateName = () =>
{
 
setName('John Doe');


}
 const incrementAge = ()=>
 {
    setAge(age + 1);
 }
const Status = ()=>
{
  setEmployed(!isEmployed);
}

return (
  <div>
      <p> Name: {name}</p>
      <button onClick={updateName}>Set Name</button>


<p> Age: {age}</p>
<button onClick={incrementAge}>Set Age</button>

<p> isEmployed:{isEmployed ? "Yes" : "No"} </p>
<button onClick={Status}>Set Employment</button>
      
  </div>
)

}

export default MyComponent