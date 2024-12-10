
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

function SignUp() {

    const [values,setvalues] = useState({
        name:'',
        email:'',
        password:''
    })
    
    const navigate = useNavigate();

    const handleSignUp = (event) =>{
     Axios.post("http://localhost:3001/api/signup",values)
     .then(res =>{
        if(res){
            navigate("/login");
        }else{
            elert("byamfuye Shumi")
        }
     })
     .then((err) => console.log(err))
    //  window.location.reload();
    }


  return (
    <>
    <div className="App">
      <div className="information">
        <center><h2>Register Yourself to the system now..</h2></center><br />
        <label>Enter Your Name:</label>
        <input
          type="text"
          onChange={e => setvalues({...values,name:e.target.value})}
        />

        <label>Enter Your Email:</label>
        <input
          type="email"
          onChange={e => setvalues({...values,email:e.target.value})}
        />

        <label>Enter Your Password:</label>
        <input
          type="password"
          onChange={e => setvalues({...values,password:e.target.value})}
        />
        
        <button onClick={handleSignUp}>Sign Up</button>

        </div>
        </div>
    </>
  )
}

export default SignUp