import './Login.css';

function Login(){
    
    return(
        <div className="form-box">
            <div className="login-container" id="login">
                <div className="top">
                    <span>Don't have an account? <a href="/register">Sign Up</a></span>
                    <h1 className='login-heading'>Log in</h1>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Username or Email"/>
                    <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Password"/>
                    <i className="bx bx-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="submit" className="submit" value="Log in"/>
                </div>
            </div>
        </div>

    );

}

export default Login;