import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './signin.css'
import { Validation } from '../../controllers/index'

function Signin() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors,setErrors] = useState({})

  const handleInput = (e)=>{
    setValues(prev =>({...prev, [e.target.name]:[e.target.value]}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setValues(Validation(values))
    setErrors(Validation(values))
  }


  return (
    <div className='app__signin'>
      <div className='app__signin-contain'>
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='form__group'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter email' name='email'
            onChange={handleInput} />
            {errors.email && <span className='error__text'>{errors.email}</span>}
          </div>
          <div className='form__group'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter password' name='password'
            onChange={handleInput} />
            {errors.password && <span className='error__text'>{errors.password}</span>}
          </div>
          <button type='submit' className='signin__btn'>Sign in</button>
          <p>You agree to our terms and policies</p>
          <Link to='/Signup' className='links'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Signin