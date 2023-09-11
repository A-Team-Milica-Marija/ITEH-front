import './Login.css';
import {useState} from 'react';
import axios from 'axios';


function Register(){

    const [registerData,setRegisterData] = useState(
        {
            username: "",
            
            email:"",
            password:""
        }
     );

     function submitRegisterData(){
        axios.post("/web/user",registerData).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)});
     }

        return(
            <div className="form-box">
                <div className="register-container" id="register">
                    <div className="top">
                        <span>Have an account? <a href="/login">Log in</a></span>
                        <h1 className='login-heading'>Sign Up</h1>
                    </div>
                    <div className="two-forms">
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Firstname" onChange={(e)=>{
                        setRegisterData(registerData=>({...registerData,username:e.target.value}));
                        }}/>
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Lastname" />
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Email" onChange={(e)=>{
                        setRegisterData(registerData=>({...registerData,email:e.target.value}));
                        }}/>
                        <i className="bx bx-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" placeholder="Password" onChange={(e)=>{
                        setRegisterData(registerData=>({...registerData,password:e.target.value}));
                        }}/>
                        <i className="bx bx-lock-alt"></i>
                    </div>
                    {JSON.stringify(registerData)}
                    <div className="input-box">
                        <button onClick={()=>{submitRegisterData()}} type="submit" className="submit"> Register</button>
                    </div>
                </div>
            </div>

        );

}

export default Register;