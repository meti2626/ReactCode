
import { useState } from "react";

function Counter()
{
const [count , setCount] =useState(0);

const incrementCount =()=>
{
  setCount (count + 1);
}

const decrementCount =()=>
  {
    setCount (count - 1);
  }

  const resetCount =()=>
    {
      setCount (0);
    }

  return(
<div className="counter-container">

<p  className="count">{count}</p>
<button onClick={incrementCount}    className="counter">Increase</button>

<button onClick={decrementCount}    className="counter">Decrement</button>

<button onClick={resetCount}    className="counter">Reset</button>
</div>


  );



}
export default Counter