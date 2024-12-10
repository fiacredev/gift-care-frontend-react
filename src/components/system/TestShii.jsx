import Axios from 'axios';
import React, { useState } from 'react'

function TestShii() {

    //  deal with hooks firstly
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [inventoryList,setInventoryList]= useState([]);

    const retrieveData = () =>{
        Axios.get("http://localhost:3001/typeShii")
        .then(
            (response)=>{
                setInventoryList(response.data);
            }
        )
    }

    const updateShii = (id) =>{
        Axios.put(`http://localhost:3001/typeShii/update/${id}`,{name,email,password})
        .then(
            (response)=>{
                setInventoryList(
                    inventoryList.map((val)=>{
                        return val.id == id
                        ? {
                            id:val.id,
                            name:name,
                            email:email,
                            password:password
                          }
                        : val;
                    })
                )
            }
        )
        .catch((error)=>{
            alert("error occured");
        })
    }

    const deleteShii = (id) =>{
        Axios.delete(`http://localhost:3001/typeShii/delete/${id}`)
        .then((response)=>{
            setInventoryList(
                inventoryList.filter((val)=>{
                    return val.id != id;
                })
            )
        })
    }

    // this function is trash not yet used

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await Axios.put(`http://localhost:3001/typeShii/update/${id}`,{name,email,password});
            console.log(response.data);
            alert("alert data updated successfully in database");
        }catch(error){
            console.error("error updating database",error);
            alert("error updating error");
        }
    }

  return (
    <div>
        <button onClick={ retrieveData}>Retrieve Data...</button>
        {inventoryList.map((val)=>{
            return(
                <div>
                    <h1>name:{val.name}</h1>
                    <h1>email:{val.email}</h1>
                    <h1>password:{val.password}</h1>
                    

                    <input type="text"
                    placeholder='this is password'
                    onChange={(event)=>{
                        setPassword(event.target.value)
                    }}
                    required
                    />
                    <input type="text"
                    placeholder='update name'
                    onChange={(event)=>{
                        setName(event.target.value)
                    }}
                    required
                    />

                    <input type="text"
                    placeholder='update email'
                    onChange={(event)=>{
                        setEmail(event.target.value)
                    }}
                    required
                    />

                    <button
                    onClick={()=>{
                        updateShii(val.id)
                    }}
                    >
                    {""}
                    update
                    </button>

                    <button
                    onClick={()=>{
                        deleteShii(val.id);
                    }}
                    >
                    delete
                    </button>

                </div>
            )
        })}
    </div>
  )
}

export default TestShii