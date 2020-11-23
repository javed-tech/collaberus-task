//React props in Function component
import React ,{useEffect}from 'react';
function Myreact4(props){
    useEffect(()=>{
        console.log("This is useEffect"+props.name);
    },[]);
    useEffect(()=>{
        console.log("This is useEffect2 in update",props.name)
    },[props.name]);
    return(
    <h2>{props.name}</h2>
    )
}
export default Myreact4;