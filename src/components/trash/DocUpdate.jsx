
import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'

function DocUpdate() {
    
    const [id, setId] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [gender,setGender] = useState('');
    const [position,setPosition] = useState('');
    const [dateHired,setDateHired] = useState('');
    const [payRate,setPayRate] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [docList,setDocList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:5000/api/get")
        .then((response)=>{
            setDocList(response.data);
        })
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:5000/api/update/${id}`,{firstName,lastName,address,city,gender,position,dateHired,payRate,email,password});
        window.location.reload();
    };

    return (
         <>
         </>
    );
}

export default DocUpdate