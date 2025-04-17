import PropTypes from 'prop-types';


function Student(props){
   
  return(
       <div className="student" >
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" :"No"}</p>
       </div>

   );

}

Student.propTypes = {
name: PropTypes.string, 
age: PropTypes.number,
isStudent: PropTypes.bool,

}

Student.defaultProps = {
     name: "Guesst",
     age: 0,
     isStudent: false,
}
export default Student
// to share data between component 
//propTypes = 
//defualt props 