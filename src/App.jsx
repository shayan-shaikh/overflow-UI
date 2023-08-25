import React, { useState } from 'react'
import "./App.css"
import InputElem from './components/InputElem'
import Notes from './components/Notes';


function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (

    <div className="main-container">
      <div className="center-container">
        <InputElem addList={addList} listTodo={listTodo} />

        <h1 className="app-heading">Idea-flow : Todo List</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Notes key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          )
        })}
      </div>

    </div>


  )
}

export default App