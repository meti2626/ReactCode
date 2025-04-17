
import PropTypes from 'prop-types';


function UserGreeting(props)
{

const welcomeMessage = <h2 className='welcome-message'>welcome {props.username}</h2> 
const LogInPrmt=<h2 className='login-pmt'>Please log in first</h2>

return(props.isLoggedIn? welcomeMessage:LogInPrmt)

}

UserGreeting.PropTypes = 
{
  isLoggedIn:PropTypes.bool, 
  username: PropTypes.string,

}

UserGreeting.defualtProps = 
{
  isLoggedIn: false,
  username : "Guest",
}

export default UserGreeting;