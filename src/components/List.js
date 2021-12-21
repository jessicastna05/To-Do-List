import React from "react"
import Card from "./Card"


function DoneImg (props){

    if(props.done){
        return(<img alt="done" src="./assets/on.png"></img>)
    }else{
        return(<img alt="undone" src="./assets/off.png"></img>)
    }

}

function List(props){

    return(<ul>
        {props.items.map(item => 
        
        <Card className={item.done ? "done item" : "item"} key={item.id}>{item.text}
        <div>
        <li>
        <button onClick={() => {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
        <button onClick={() => {props.onItemDeleted(item)}}><img alt="delete" src="./assets/lixeira.png"></img></button>
        </li>
        </div>
        </Card>)}
    </ul>)
}


export default List