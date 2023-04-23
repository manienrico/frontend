import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

import { SignupValidation } from '../../controllers/index'

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errors,setErrors] = useState({})

  const handleInput = (e)=>{
    setValues(prev =>({...prev, [e.target.name]:[e.target.value]}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setValues(SignupValidation(values))
    setErrors(SignupValidation(values))
  }


  return (
    <div className='app__signin'>
      <div className='app__signin-contain'>
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='form__group'>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter name' name='name'
            onChange={handleInput} />
            {errors.name && <span className='error__text'>{errors.name}</span>}
          </div>
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
          <div className='form__group'>
            <label htmlFor="confirm__password">Confirm password</label>
            <input type="password" placeholder='Confirm password' name='confirm__password'
            onChange={handleInput} />
            {errors.password && <span className='error__text'>{errors.password}</span>}
          </div>
          <button type='submit' className='signin__btn'>Sign up</button>
          <p>You agree to our terms and policies</p>
          <Link to='/' className='links'>Already have an Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup