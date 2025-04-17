

function Button() {
 
  const handleClick = (e) => e.target.textContent  = "OUCH! ";
 
return (
    //why do the handleClick2("Bro") is automatically called
    <button onDoubleClick= {(e)=>handleClick(e)} > Click Me 😊</button>

  );
}

export default Button;