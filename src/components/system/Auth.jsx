
import React, { useState,useEffect} from 'react'
import { useNavigate,Link} from 'react-router-dom';
import Doctors from './DocSystem';
import Axios from 'axios'

function Authorization() {

    const [auth,setAuth] = useState(false);
    const [name,setName] = useState('');
    const [message,setMessage] = useState('');
    Axios.defaults.withCredentials = true;
    
    const navigate = useNavigate();
    useEffect(()=>{
        Axios.get("http://localhost:3001/auth")
        .then(res => {
            if(res.data.Status === "Success"){
                setAuth(true);
                setName(res.data.name)
                // navigate("/");
            }else{
                setAuth(false);
                setMessage(res.data.Error)
            }
        })
        .then(err => console.log(err))
    },[])

    const handleLogOut = () =>{
        Axios.get("http://localhost:3001/logout")
        .then(res => {
            if(res) location.reload(true);
            res.send("Error occured can't perform logout");
        })
        .catch(err => console.log(err))
    }

  return (
    <>
    <div>
        {auth ? 
        
        <div>
            <h3>you are authorized as {name}</h3>
            <button onClick={handleLogOut} 
            style={{width:"100px",fontSize:"20px",textTransform:"capitalize",borderRadius:"7px",marginLeft:"10px",border:"none"}}>
            Log out
            </button><br /><br />
            <Link to='/stock'>Stock Management....</Link><br />
            <Link to='/decision'>Decision system Part....</Link>
            <Doctors/>
        </div>
        

        :

        <div>
            <h3>{message}</h3><br />
            <h3>You can login to then system then start about backend system features Management....</h3> <br />
            <h3>click here to login..<Link to="/login">Log In Now</Link></h3>
        </div>
    }
    </div>
    </>
  )
}

export default Authorization