
import PropTypes from 'prop-types'



function List(props)
{
// what is array of objects 


//what is map() used for   //why do we use {} to inclose fruit 
//why do we use key?

const category = props.category;

 const itemList = props.items;
 const listItems = itemList.map( item=> <li key={item.id}>{item.name}: &nbsp;
                                                          {item.calories} </li>);
  
 return(  <>
 
 <h3 className="List-category">{category}</h3>
           <ul className="List-items">{listItems}</ul>
 
 
 </>
 )
}

List.defaultProps = 
{
  category: "Category",
  items:[],
}
List.propType =
{
  items:PropTypes.arrayOf(PropTypes.shape(id:PropTypes.number ,
                                          name:PropTypes.string,
                                          calories:PropTypes.number)) ,
  category: PropTypes.string,
}



export default List;