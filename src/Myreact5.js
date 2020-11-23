//React Events (e=event,target=event target,value=event target value)
import React ,{useState}from 'react';
function Myreact5(props){
    const[val,setval]=useState("javed");
    function test(e) {
        console.log("Testing...",e.target.value);
        setval(e.target.value);
    }

    return(
        <div>
        <input type="text" value={val} onChange={test}/>
        <button onClick={()=>{alert(val)}}>Click me</button>
        </div>
    )
}
export default Myreact5;