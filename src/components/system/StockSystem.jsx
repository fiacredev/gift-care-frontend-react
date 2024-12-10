import "./design.css";
import { useState } from "react";
import Axios from "axios";

function Stock() {
  
  const [productName,setProductName] = useState("");
  const [supplierName,setSupplierName] = useState("");
  const [supplierEmail,setSupplierEmail] = useState("");
  const [expirationDate,setExpirationDate] = useState("");
  const [productPrice,setProductPrice] = useState("");
  const [productQuantity,setProductQuantity] = useState("");
  const [orderNumber,setOrderNumber] = useState("");
  const [productDescription,setProductDescription] = useState("");

  const [newSupplierEmail,setNewSupplierEmail] = useState("");

  const [inventoryList, setInventoryList] = useState([]);

  const addInventory = () => {
    Axios.post("http://localhost:3001/inventory/create", {
      productName:productName,
      supplierName:supplierName,
      supplierEmail:supplierEmail,
      expirationDate:expirationDate,
      productPrice:productPrice,
      productQuantity:productQuantity,
      orderNumber:orderNumber,
      productDescription:productDescription
    }).then(() => {
      setInventoryList([
        ...inventoryList,
        {
          productName:productName,
          supplierName:supplierName,
          supplierEmail:supplierEmail,
          expirationDate:expirationDate,
          productPrice:productPrice,
          productQuantity:productQuantity,
          orderNumber:orderNumber,
          productDescription:productDescription
        },
      ]);
      location.reload(true);
    });
  };

  const getInventory = () => {
        Axios.get("http://localhost:3001/inventory").then((response) => {
      setInventoryList(response.data);
    });
  };


  const deleteInventory = (id) => {
    Axios.delete(`http://localhost:3001/inventory/delete/${id}`)
    .then((response) => {
      setInventoryList(
        inventoryList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <h4 style={{textAlign:"center",textTransform:"capitalize",marginTop:"10px"}}>this is where you can manage your medecine products in stock !!!! stored in database...</h4><br />
      <div className="information">
        <label>Product Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setProductName(event.target.value);
          }}
        />
        <label>supplier Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setSupplierName(event.target.value);
          }}
        />

        <label>Supplier Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setSupplierEmail(event.target.value);
          }}
        />
        <label>Expiration Date:</label>
        <input
          type="date"
          onChange={(event) => {
            setExpirationDate(event.target.value);
          }}
        />

        <label>Product Price:</label>
        <input
          type="text"
          onChange={(event) => {
            setProductPrice(event.target.value);
          }}
        />

        <label>Product Quantity:</label>
        <input
          type="text"
          onChange={(event) => {
            setProductQuantity(event.target.value);
          }}
        />
        
        <label>Order Number:</label>
        <input
          type="text"
          onChange={(event) => {
            setOrderNumber(event.target.value);
          }}
        />

        <label>Product Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setProductDescription(event.target.value);
          }}
        />

        <button onClick={addInventory}>Add Record</button>
        
      </div>

      <div className="employees">
        <button onClick={getInventory}>Show stock..</button>

        {inventoryList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Product Name: {val.productName}</h3>
                <h3>Supplier Name: {val.supplierName}</h3>
                <h3>Supplier Email: {val.supplierEmail}</h3>
                <h3>Expiration Date: {val.expirationDate}</h3>
                <h3>Product price: {val.productPrice}</h3>
                <h3>Product Quantity: {val.productQuantity}</h3>
                <h3>Order number: {val.orderNumber}</h3>
                <h3>Product Description: {val.productDescription}</h3>
              </div>
              <div>

                <button
                  onClick={() => {
                    deleteInventory(val.id);
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

export default Stock;
