import './Login.css';

function Register(){

        return(
            <div className="form-box">
                <div className="register-container" id="register">
                    <div className="top">
                        <span>Have an account? <a href="/login">Log in</a></span>
                        <h1 className='login-heading'>Sign Up</h1>
                    </div>
                    <div className="two-forms">
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Firstname"/>
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Lastname"/>
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Email"/>
                        <i className="bx bx-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" placeholder="Password"/>
                        <i className="bx bx-lock-alt"></i>
                    </div>
                    <div className="input-box">
                        <input type="submit" className="submit" value="Register"/>
                    </div>
                </div>
            </div>

        );

}

export default Register;