
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function DocRegister() {
    
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [address,setAddress] = useState('');
    const [gender,setGender] = useState('');
    const [position,setPosition] = useState('');
    const [dateHired,setDateHired] = useState('');
    const [payRate,setPayRate] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [docList,setDocList] = useState([]);
    
    const [newFirstName,setNewFirstName] = useState("");
    const [newLastName,setNewLastName] = useState("");
    const [newAddress,setNewAddress] = useState("");
    const [newGender,setNewGender] = useState("");
    const [newPosition,setNewPosition] = useState("");
    const [newDateHired,setNewDateHired] = useState("");
    const [newPayRate,setNewPayRate] = useState("");
    const [newEmail,setNewEmail] = useState("");
    const [newPassword,setNewPassword] = useState("");

    const handleSubmit = () =>{
     Axios.post("http://localhost:5000/api/insert",
        {firstName: firstName, lastName: lastName, address: address, gender: gender, position: position, dateHired: dateHired, payRate: payRate, email: email, password: password});
        setDocList([...docList,{firstName: firstName, lastName: lastName, address: address, city: city, gender: gender, position: position, dateHired: dateHired, payRate: payRate, email: email, password: password},]);
        window.location.reload();
    };

    useEffect(()=>{
      Axios.get("http://localhost:5000/api/get")
      .then((response)=>{
          setDocList(response.data);
      })
  },[]);
  
  const updateDocInfo = (id) =>{
    Axios.put("http://localhost:5000/api/update",{firstName:newFirstName, lastName:newLastName, address:newAddress , position:newPosition, gender:newGender, dateHired:newDateHired, payRate:newPayRate, email:newEmail, password:newPassword, id: id})
    .then((response)=>{
      setDocList(
        docList.map((val)=>{
          return val.id == id
          ? {
            id:val.id,
            firstName:val.fname,
            lastName:val.lname,
            address:val.address,
            position:val.position,
            gender:val.gender,
            dateHired:val.date_hired,
            payRate:val.pay_rate,
            email:val.email,
            password:val.password
          }
          : val
        })
      );
    }
  );
  }
  

  return (
    <>
    <label>First Name:</label>
        <input type="text" name="firstName" onChange={(e) => {
          setFirstName(e.target.value)
        }} />

    <label>last Name:</label>
        <input type="text" name="lastName" onChange={(e) => {
          setLastName(e.target.value)
        }} />

    <label>Adrees:</label>
        <input type="text" name="address" onChange={(e) => {
          setAddress(e.target.value)
        }} />
    
    <label>city:</label>
        <input type="text" name="city" onChange={(e) => {
          setCity(e.target.value)
        }} />
    
    <label>gender Name:</label>
        <input type="text" name="gender" onChange={(e) => {
          setGender(e.target.value)
        }} />
    
    <label>position Name:</label>
        <input type="text" name="position" onChange={(e) => {
          setPosition(e.target.value)
        }} />

    <label>Date hired:</label>
        <input type="date" name="dateHired" onChange={(e) => {
          setDateHired(e.target.value)
        }} />

    <label>Pay Rate:</label>
        <input type="text" name="payRate" onChange={(e) => {
          setPayRate(e.target.value)
        }} />
    
    <label>Email:</label>
        <input type="email" name="email" onChange={(e) => {
          setEmail(e.target.value)
        }} />
    
    <label>Password:</label>
        <input type="text" name="password" onChange={(e) => {
          setPassword(e.target.value)
        }} />

    <button onClick={handleSubmit}>Submit</button> 
    <br /><br /><br /><br />
    
    {docList.map((val,key) => {
      return(

        <div>

          <div>
            <h3>First Name: {val.fname}</h3>
            <h3>last Name: {val.lname}</h3>
            <h3>Address: {val.address}</h3>
            <h3>position: {val.position}</h3>
            <h3>Date Hired: {val.date_hired}</h3>
            <h3>Pay Rate: {val.pay_rate}</h3>
            <h3>email: {val.email}</h3>
            <h3>Password: {val.password}</h3>
          </div>
          <div>
            
            <input 
            type="text" 
            placeholder='first Name'
            onChange={(event) =>{
              setNewFirstName(event.target.value);
            }}
            />

            <input 
            type="text" 
            placeholder='second name'
            onChange={(event) =>{
              setNewLastName(event.target.value);
            }}
            />

            <input 
            type="text" 
            placeholder='address'
            onChange={(event) =>{
              setNewAddress(event.target.value);
            }}
            />

            <input 
            type="text" 
            placeholder='gender'
            onChange={(event) =>{
              setNewGender(event.target.value);
            }}
            />

            <input 
            type="text" 
            placeholder='position'
            onChange={(event) =>{
              setNewPosition(event.target.value);
            }}
            />

            <input 
            type="text" 
            placeholder='Date hired'
            onChange={(event) =>{
              setNewDateHired(event.target.value);
            }}
            />

            <input 
            type="text" 
            placeholder='Pay rate'
            onChange={(event) =>{
              setNewPayRate(event.target.value);
            }}
            />

            <input 
            type="text" 
            placeholder='email'
            onChange={(event) =>{
              setNewEmail(event.target.value);
            }}
            />

            <input 
            type="text" 
            placeholder='password'
            onChange={(event) =>{
              setNewPassword(event.target.value);
            }}
            />

          <button type='submit' onClick={()=> updateDocInfo(val.id)}>{" "}update</button>

          </div>

        </div>

      )
    })}
    </>
  )
}

export default DocRegister