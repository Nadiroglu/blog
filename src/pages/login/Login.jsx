import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter your email'/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password'/>
            <button className="loginButton">Login</button>
        </form>
<button className="loginRegisterButton">Register</button>
        </div>
  )
}

export default Login