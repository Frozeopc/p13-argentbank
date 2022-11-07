import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { login , profile } from '../redux/actions'
import { useDispatch } from 'react-redux'; 
import { useForm } from "react-hook-form";

export default function Login() {


    const navigate= useNavigate();
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    
    const onFormSubmit = data => (dispatch(login(data)))
    const onErrors = errors => console.error(errors)
    const { register, handleSubmit, formState: {errors},  } = useForm()
    
    let badRequest = localStorage.getItem('error')

   if (badRequest === 'badRequest' ){
        localStorage.clear()
    }

 // const [checked, setChecked] = useState(false)
    useEffect(()=> {
        
        console.log(token);
        if(token) {
            dispatch(profile(token));
            navigate("/profile")
        }
        
    }, [token, dispatch])

   // const handleChecked = () => {
     //   setChecked(!checked)
  //  }

   
    return (
    <>
    <Header />
        <main className="main bg-dark">
             <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form 
                     onSubmit={handleSubmit(onFormSubmit, onErrors)}
                >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input {...register('email',{required: "email is required"})}
                            type="text" 
                            id="username" 
                           
                        />
                        {errors?.email && <p style={{ color: 'red', margin: 0}}>{errors.email.message}</p>}
                    </div>
                     <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input {...register("password", {required: "password is required"})}
                            type="password" 
                            id="password"                           
                        />
                        {errors?.password && <p style={{ color: 'red', margin: 0}}>{errors.password.message}</p>}
                    </div>
                    <div className="input-remember">
                        <input 
                            type="checkbox" 
                            id="remember-me"                           
                        />
                        <label htmlFor="remember-me"> Remember me </label>
                    </div>                                                 
                    <button type='submit'
                        className="sign-in-button"                      
                    > 
                        Sign In 
                    </button>                                                                  
                </form>
                {badRequest ? 
                    <div className='alert'>
                        <p style={{ color: 'red', margin: 0}}> Mot de passe ou identifiant incorrect</p>
                    </div> :
                    <div></div>
                }  
            </section>
        </main>
    <Footer />
    </>
  )
}
