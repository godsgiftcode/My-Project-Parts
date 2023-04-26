import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className='general'>
    <body>
        <form>
            <p className='para-have'>
                Have an account?
            </p>
            <div className='div-input'>
                <input type='text' className='input-name' placeholder='Your Name'/>
                <input type='password' className='input-name' placeholder='Password'/>
            </div>
            <div className="div-href">
                <a href='' className="login">Login</a>
            </div>
            <input type="checkbox" className="input" value="Yes" /><span>Remember Me</span>
            <a href='' className="error-pass">
                Forgot Password
            </a>
            <p className="sign">
                --Or Sign In With--
            </p>

        <a href='./https:facebook.com' className="facebook">
            Facebook
        </a>
        <a href='./https:instagram.com' className="instagram">
            Instagram
        </a>
        </form>
        </body>
        </div>
    </>
  )
}

export default Login