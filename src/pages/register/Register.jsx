import React from 'react'
import "./Register.scss";
import {Link} from 'react-router-dom'

const Register = () => {
  return (
        <div className="register">
        <div className='card'>
                <div className='left'>
                        <h1>Sign Up</h1>
                        <p>Create new account here</p>
                        <span>Do you have an account ?</span>
                        <Link to='/login'>
                                <button>Login</button>
                        </Link>
                </div>        
                <div className='right'>
                        <h1>Register</h1>
                        <form>
                                <input type="text" placeholder="Username"/>
                                <input type='email'placeholder='Email'/> 
                                <input type="password" placeholder="Password"/>
                                <input type="text" placeholder='name'/>
                                <Link to='/register'> 
                                        <button>Register</button>
                                </Link>
                        </form>
                </div>
        </div>
    </div>

  )
}

export default Register
