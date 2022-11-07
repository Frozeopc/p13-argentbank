import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'; 
import { update, profile } from '../redux/actions'

function Modal(props) {

    const [toggle, setToggle ] = useState(true)

    const toggleBtn = () => {
        setToggle(false)
    }
    
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()

    const onSubmit = data => {
        dispatch(update(data))
        dispatch(profile(token))
        setToggle(true) 
        reset ({ firstname: "", lastname: ""})
    }

    const onErrors = errors => console.error(errors)
    const { register, handleSubmit, reset, formState: {errors} } = useForm()

  return (
    <>
    {toggle 
        ?
            <section>
                <div className='welcome'>{props.firstname} {props.lastname}</div> 
                <button 
                    className="edit-button"
                    onClick={toggleBtn}                  
                >                
                    Edit Name
                </button>
            </section>             
        :
            <form 
                className='modal'
                onSubmit={handleSubmit(onSubmit, onErrors)}
             >
              <div className='input-container'>
                <input 
                    className='modal-input'
                    type="text" 
                    id="username" 
                    placeholder={props.firstname}
                   {...register('firstName', {required: "firstname is required"})}
                />
                {errors?.firstName && <p style={{ color: 'red', margin: 0}}>{errors.firstName.message}</p>}
                <input 
                    className='modal-input'
                    type="text" 
                    id="username" 
                    placeholder={props.lastname}
                    {...register('lastName', {required: "lastname is required"})}
                />   
                {errors?.lastName && <p style={{ color: 'red', margin: 0}}>{errors.lastName.message}</p>}
              </div>
              <div className='btn-container'>
                <button
                    className='modal-btn'
                    type='submit' 
                >
                    Save
                </button>  
                <button
                    className='modal-btn'
                    type='button'
                    onClick={() => reset ({ firstname: "", lastname: ""}, setToggle(true))}
                >
                    Cancel 
                </button>
              </div>      
        </form>
    }
    </>  
  )
}

export default Modal