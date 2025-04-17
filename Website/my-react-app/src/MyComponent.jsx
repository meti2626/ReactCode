
import React, {useState} from "react"

function MyComponent()
{

    const [name , setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment ]= useState("");
    const [payment, setPayment] =useState("");
    const [shipping , setShipping] = useState("");

    function handleChange(event)
    {
      setName(event.target.value);
    }

function handleQuantityChange(event)
{

setQuantity(event.target.value);

}

function handleShippingChange(event)
{
  setShipping(event.target.value)
}

function handleCommentChange (event)
{

setComment(event.target.value);

}
function handlePaymentChange (event)
{
  setPayment(event.target.value)
}
      return (
          <div>
              <input value={name} onChange={handleChange} />
              <p>Name: {name}</p>

              <input value={quantity} onChange={handleQuantityChange} type="number" />
              <p>Quantity: {quantity}</p>

              <textarea value={comment}  onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>    
              <p>comment: {comment}</p>
              
              <select value={payment} onChange={handlePaymentChange}>
                   <option value="">Select an option</option>
                   <option value="Visa">Visa</option>
                   <option value="MasterCard">MasterCard</option>
                   <option vlue="Gift Card">Gift Card</option>

              </select>

              <p>payment: {payment}</p>

              <label>
                <input type ="radio" value="pick up"  checked ={shipping === "pick up"}
                onChange={handleShippingChange}/>
                Pick up
              </label>

              <label>
              <input type ="radio" value="Delivery"  checked ={shipping === "Delivery"}
                onChange={handleShippingChange}/>
             Delivery
              </label>
              <p>Shipping: {shipping}</p>

           </div>
              )
 }
export default MyComponent