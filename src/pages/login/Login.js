import React from 'react';
import './Login.scss';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
        <div className='card'>
                <div className='left'>
                        <h1>LogIn</h1>
                        <p>This is a login page</p>
                        <span>Do you have an account ?</span>
                        <Link to='/register'>
                                <button>Register</button>
                        </Link>
                        
                </div>        
                <div className='right'>
                        <h1>Login</h1>
                        <form>
                                <input type="text" placeholder="Username"/>
                                <input type="password" placeholder="Password"/>
                                <Link to='/login'>
                                        <button>Login</button>
                                </Link>
                        </form>
                </div>
        </div>
    </div>
  )
}

export default Login;
