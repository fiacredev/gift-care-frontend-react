import React, { useEffect } from 'react'
import Decision from './DecisionRoom.css'
import bootstrap from '../../Bootstrap icon/icons/bootstrap-icons.css'
import Axios from 'axios'
import { useState } from 'react'

function DecisionRoom() {

  const [name,setName] = useState("");
  const [idea,setIdea] = useState("");
  const [decisionList,setDecisionList] = useState([]);

  const addDecision = () =>{
    Axios.post("http://localhost:3001/decision/create",{
      name:name,
      idea:idea
    }).then(()=>{
      setDecisionList([
        ... decisionList,
        {
          name:name,
          idea:idea
        },
      ]);
      location.reload(true);
    });
  };

  
useEffect(()=>{
  Axios.get("http://localhost:3001/decision").then((response)=>{
    setDecisionList(response.data);
  });
},[]);
  

const deleteDecision = (id) =>{
  Axios.delete(`http://localhost:3001/decision/delete/${id}`)
  .then((response)=>{
    setDecisionList(
      decisionList.filter((val)=>{
        return val.id != id;
      })
    )
  })
}

  return (
    <div>
        <h3 className='dec-text'>Decision Room Part...</h3>

        <input type="text" className='dec-header' placeholder='enter your names'
        onChange={(event)=>{
          setName(event.target.value);
        }}
        />

        <div className='box'>
          {decisionList.map((val)=>{
            return(
              <center>
                <div className='returned-dec-box'>
                <h6 className='returned-name'>Name: {val.name}</h6>

                <h6 className='delete-dec bi bi-trash' 
                onClick={()=>{
                  deleteDecision(val.id)
                }}
                >
                </h6>
                
                <p className='returned-idea'>{val.idea}</p>
                </div>
              </center>
            )
          })}
        </div>

        <div className='sendMessage'>
            <input type="text" className='box-two' 
            onChange={(event)=>{
              setIdea(event.target.value);
            }}
            />

            <button className='sendButton bi bi-send-fill' onClick={addDecision}></button>
        </div>
    </div>
  )
}

export default DecisionRoom