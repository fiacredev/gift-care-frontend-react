import "./design.css";
import { useState } from "react";
import Axios from "axios";

function Doctors() {
  
  const [name, setName] = useState("");
  const [email,setEmail] = useState('');
  const [dateHired,setDateHired] = useState('');

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      email:email,
      dateHired:dateHired
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          email: email,
          dateHired: dateHired
        },
      ]);
      location.reload();
    });
  };

  const getEmployees = () => {
        Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateEmployee = (id) => {
    Axios.put(`http://localhost:3001/update/${id}`, { name,email,dateHired})
    .then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name:name,
                  email:email,
                  dateHired:dateHired
                }
              : val;
          })
        );
      }
    )
    .catch((error)=>{
      alert("this is error occured",error);
    })
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <h4 style={{textAlign:"center"}}>this is where you can manage Doctors info stored in database !!!!</h4><br />
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Date hired:</label>
        <input
          type="date"
          onChange={(event) => {
            setDateHired(event.target.value);
          }}
        />

        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Email: {val.email}</h3>
                <h3>Date Hired: {val.dateHired}</h3>
              </div>
              <div>

                <input
                  type="text"
                  placeholder="Enter New Names"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />

                <input
                  type="email"
                  placeholder="Enter new Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />

                <input
                  type="date"
                  onChange={(event) => {
                    setDateHired(event.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    updateEmployee(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Doctors;
