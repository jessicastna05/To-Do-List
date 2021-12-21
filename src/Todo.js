import React, { useEffect } from 'react'
import List from './components/List'
import Item from './components/Item'
import TodoForm from './components/TodoForm';
import Modal from './components/Modal'
import { useState } from 'react';

const SAVED_ITEMS = 'savedItems'

function Todo() {



    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() =>{

        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems){
        setItems(savedItems)}

    }, [])

    useEffect(()=> {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    })

    function onAddItem(text){

        let it = new Item(text)
        setItems([...items, it])
        setShowModal(false)

    }

    function onItemDeleted(item){

        let filterItems = items.filter( it => it.id !== item.id)

        setItems(filterItems)

    }

    function onDone (item) {

      let updatesItems = items.map(it => {
          if (it.id === item.id){
             it.done = !it.done
          }
          return it
      })

    setItems(updatesItems);
}

    function onHideModal(){

        setShowModal(false)
    }

    
    return(<div className="container">
                <header className="header">
                    <h1>Todo List</h1> 
                    <button onClick={()=> {setShowModal(true)}} className="addButton">+</button>
                </header>

                
                <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm onAddItem={onAddItem}></TodoForm>
                </Modal>

            </div>)
            
}



export default Todo