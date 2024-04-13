import React from "react";
    import './Login.css';
    import { useState } from "react";
    import { Link } from 'react-router-dom';
    import axios from 'axios';
    import { useNavigate } from "react-router-dom";
    
function Login(){
    
    function Login() {
        const[email, setEmail] = useState()
        const[password, setPassword] = useState()
        const navigate=useNavigate()
        
    
        const handleSubmit =(e) =>{
            e.preventDefault()
            axios.post('http://localhost:5173/login',{email,password})
            .then(result => {
                console.log(result)
                if(result.data==="Success"){
                    navigate('/home')
                }
                
            })
            .catch(err=> console.log(err))
        }
    
        return (
            <div id ="main-container" className="d-flex justify-content-center align-items-center bg-#49a0a2 vh-100 ">
                <div className="bg-white p-3 rounded w-50">
                    <h2 className="title">Login</h2>
                    
                    <form className="sub-container" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="InputEmail">Email</label>
                            <input type="email" className="form-control" id="InputEmail"  placeholder="sample@gmail.com" 
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div><br />
                        <div className="form-group">
                            <label htmlFor="InputPassword">Password</label>
                            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" 
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div><br />
                        <div className="form-group form-check">
                    <div>
                        <input type="checkbox" className="form-check-input" id="Check" />
                        <label className="form-check-label" htmlFor="Check">Remember Me</label>
                    </div>
                    <a id="flink" href="/#">Forgot Password?</a>
                    </div>
                        <div className="button-container">
                            <button className="button">Signup</button>
                        </div>
                    </form>
                    <p>Already Registered</p>
                    <div style={{ textAlign: 'center' }}>
                    <Link to="/login" className="button">
                        Login
                    </Link>
                    </div>
                    
                </div>
            </div>
    );
    
}
}
    
    export default Login;