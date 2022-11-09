import React from 'react';
import { Link,Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function Navbar() {

  const profil = useSelector((state) => (state.profil))
  const isAuth = localStorage.getItem("isAuth")
 
  //LOCAL STORAGE que pour le site local, redux pour le partage de la page, state pour le component
  const deconnexion = () => {
    localStorage.clear();
    <Navigate to="/"/>
  }

  return (
    <>  
      {isAuth?  
        <div className='profil'>
          <i className="fa fa-user-circle"></i> 
          <div className='profil-name'> {profil.data.firstName} </div>    
         <Link
            onClick={deconnexion}
            className="main-nav-item"
            to={"/"}
          >         
          <i className="fa fa-sign-out"></i>
            Sign Out
        </Link>  
        </div>       
      :           
        <Link 
            className="main-nav-item" 
            to={"/login"}
        >
            <i className="fa fa-user-circle"></i>
            Sign In
        </Link>  
      }         
    </>
  )
}
export default Navbar