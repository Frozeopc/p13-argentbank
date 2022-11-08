import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Modal from '../Components/Modal';
import Footer from '../Components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { profile } from '../redux/actions'
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const profil = useSelector((state) => (state.profil)) 
    const token = localStorage.getItem('token')
 
    useEffect(()=> {
        if(token === null || token === undefined) {
            alert('vous devez vous identifier')
            navigate('/')
        }
        else {
            dispatch(profile(token))
        }       
        
    }, [])

  return (    
    <>
    <Header  />
        <main className="main bg-grey">
            <div className="header">              
                <h1> Welcome back </h1>  
                <Modal 
                    firstname = {profil.data.firstName}
                    lastname = {profil.data.lastName} 
                />                                  
            </div>
                 <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    <Footer />
    </>
  )
}

