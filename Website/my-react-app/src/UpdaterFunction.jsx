
import React , {useState} from "react";



 function UpdaterFunction()
 {

//     const [count, setCount ] = useState(0);
 
//     function Decrement()
// {
//   setCount(c=> c -1);
// setCount(c=> c - 1);
// setCount(c=> c - 1);

// }

// function Increment()
// {
// setCount(c=> c +1);
// setCount(c=> c + 1);
// setCount(c=> c + 1);
// };

// function  Reset()
// {
// setCount (0);
// }



// return
// (
// <div>
 

// <button onClick={(count) => handleDecrement(count )}>Decrement</button>
// <button>Reset</button>
// <button>Increment</button>

// </div>


// )

const [car, setCar] =useState({year: 2024, make: "Ford" , model :"Mustang"});

function handleYearChange(event)
{

  setCar({...car  ,  year :event.target.value});

}

function handleMakeChange(event)
{
  setCar( c => ({ ...c  ,  make :event.target.value}));
}

function handleModelChange(event)
{
  setCar(c =>({...c ,  model :event.target.value}));
}
return (<div>
          <p>Your favorite car is : {car.year} {car.make} {car.model}</p>

          <input type="number" value={car.year}  onChange={handleYearChange}/><br/>
          <input type="text" value={car.make  } onChange={handleMakeChange}/><br/>
          <input type="text" value={car.model }  onChange={handleModelChange}/><br/>


</div>)






}

export default UpdaterFunction