import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function NotFound() {

    localStorage.clear()

  return (
    <>
        <Header />
            <h1 > Page inexistante</h1>
                <p className='notFound-title'> Erreur 404</p>
                <p> Désolé la page que vous avez demandé n'existe pas </p>
                    <div className='link-container'>
                        <Link
                            className='notFound-link'
                            to={"/login"} 
                        > Veuillez vous reconnecter en cliquant ici</Link> 
                    </div>               
                <div className='hero'></div>
        <Footer />
    </>
  )
}

export default NotFound