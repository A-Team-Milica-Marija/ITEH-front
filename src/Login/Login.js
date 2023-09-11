import './Login.css';
import {useState} from 'react';
import axios from 'axios';

function Login(){
    const [loginData,setLoginData] = useState(
        {
            email:"",
            password:""
        }
     );

     function submitLoginData(){
        axios.post("/web/login",loginData).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)});
     }
    return(
        <div className="form-box">
            <div className="login-container" id="login">
                <div className="top">
                    <span>Don't have an account? <a href="/register">Sign Up</a></span>
                    <h1 className='login-heading'>Log in</h1>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Username or Email" onChange={(e)=>{
                        setLoginData(loginData=>({...loginData,email:e.target.value}));
                        }}/>
                    <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Password" name='' onChange={(e)=>{setLoginData(loginData=>({...loginData,password:e.target.value}))}}/>
                    <i className="bx bx-lock-alt"></i>
                </div>
                <pre>{JSON.stringify(loginData)}</pre>
                <div className="input-box">
                    <button onClick={()=>{submitLoginData()}} type="submit" className="submit" >Log in</button>
                </div>
            </div>
        </div>

    );

}

export default Login;