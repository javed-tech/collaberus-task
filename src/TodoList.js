import React,  {useState} from "react";
function TodoList() {
    const [inputList, setInputList]= useState("");
    const [items, setitems]= useState([]);
    const itemEvent  = (event)=>{
        setInputList(event.target.value);
    };

    const listofitems = ()=>{
        setitems((olditems)=>{
            return [... olditems, inputList];
            
        });
         setInputList("");
    };
    return(
        <>
            <div className="maindiv">
                <div className="centerdiv">
                    <br/>
                    <h1>TODO LIST</h1>
                    <br/>
                    <input type="text" placeholder="Add a Items" 
                     value={inputList}
                     onChange={itemEvent}/>
                    <button onClick={listofitems}>+</button>
                        {items.map((itemval)=>{
                          return <p>{itemval}</p>  
                        })}
                </div>
                 
            </div>
        </>
    );
}
export default TodoList;