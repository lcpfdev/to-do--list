import React from "react";
import "./App.css";
import { useState } from 'react';

function App() {
const [newItem, setNewItem] = useState("")
const [items, setItems] = useState([])




function addItem() {
// console.log(newItem)
const item = {
  id: Math.floor(Math.random() * 1000),
  value: newItem

}
 setItems(oldList => [...oldList, item])

 setNewItem("")
 console.log(items)


}

function deleteList(id) {
  const newArray = items.filter(item => item.id !== id)
  setItems(newArray)
}







  return (
    <div 
    className="App">
      <div 
      className="header">
        <h1>TO DO LIST</h1>
         </div>
          <div className="inputBox">
           <input 
           className="inputBx"
           size="50"
           value={newItem}f
           placeholder=""
           onChange={e => setNewItem(e.target.value)}
           > 
           </input>
          </div>
          <div 
          className="button"
      
          onClick={() => addItem()}
          
          
          >
             
            <button className="addBtn">ADD</button>
          </div>
          <div 
          className="list">
          <ul>
          {items.map(item => {
            return(
              <li key={item.id}>{item.value} <button className ="delBtn" onClick={() => deleteList(item.id)}>DEL</button> </li>
            )
          })}
          

          </ul>
         
          </div>
      

    </div>
 
  );
}

export default App;
