import React, { useEffect, useState } from 'react';
import "./styles.scss";

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists)
  } else {
    return []
  }
}

export const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState('');
  const [toggleButton, setToggleButton] = useState(false);

  const addItems = () => {
    if (!inputData) {
      alert("Pleae fill item")
    }
    else {
      setItems([...items, inputData])
    }
    setInputData("");
  }

  const editItem = (index) => {
    const item_tofo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_tofo_edited.name)
    setIsEditItem(index);
    setToggleButton(true);
  }


  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id === index;
    })
    setItems(updatedItem);
  }

  const removeAll = () => {
    setItems([]);
  }

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items])


  return (
    <div className='todo-style'>
      <div className="container text-center">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-6">
            <h1>Todo</h1>
            <br />
            <div className='input-style'>
              <input type="text" placeholder='🐥 Add Item here' className='form-control' value={inputData} onChange={(event) => setInputData(event.target.value)} />
             {toggleButton ?  <button className='add-btn' onClick={addItems}> <i className='fas fa-edit '></i></button> : <button className='add-btn' onClick={addItems}> <i className='fas fa-plus '></i></button>}
            </div>

            {items.map((curElem, index) => (
              <div className="show-item" key={index}>
                <div>{curElem}</div>
                <div className="todo-action">
                  <button className='add-btn btn btn-warning mx-2' onClick={() => editItem(curElem.id)}> <i className='fas fa-edit '></i></button>
                  <button className='add-btn btn btn-danger' onClick={() => deleteItem(curElem.id)}> <i className='fas fa-trash-alt '></i></button>
                </div>
              </div>
            ))}

            <button className='add-btn btn btn-primary mt-3' onClick={removeAll}> <i className='fas fa-user'></i> Remove All</button>
          </div>
        </div>
      </div>
    </div>
  )
}
