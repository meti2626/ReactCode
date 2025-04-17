import profilepc from './assets/profile.jpg';

function Card()
{

  return(

    <div className="card">
        <img className="card-img" src={profilepc} alt="Profile picture"></img>
         <h2 className='card-title'>Bro Code</h2>
         <p  className='card-text'>student and ceo of study</p>
    </div>
     

  );

}

export default Card