import './design.css'
import React, {useState} from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import Axios from 'axios'

function LogIn() {

  const [values,setValues] = useState({
    email:'',
    password:''
  });
  
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleSignin = (event) =>{
    event.preventDefault();
    Axios.post("http://localhost:3001/login",values)
    .then(res =>{
      if(res.data.Status === "Success"){
        navigate("/auth");
      }else{
        alert("invalid Data");
      }
    }).then(err => console.log(err));
  }
 
  return (
    <>
    <div className="App">
      <div className="information">

        <form onSubmit={handleSignin}>
        <label>Enter Your Email:</label>
        <input
          type="text"
          onChange={e => setValues({...values,email:e.target.value})}
        />
        <label>Enter Your Password:</label>
        <input
          type="password"
          onChange={e => setValues({...values,password:e.target.value})}
        />

        <input type="submit" value="login 2 system" />

        </form>
        <h4>not Arleady have an account ?? if not =======</h4><Link to="/signup">Register</Link>
        </div>
        </div>
    </>
  )
}

export default LogIn

