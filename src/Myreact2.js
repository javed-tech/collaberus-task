//Hooks and states using in function componenet
import React, { useEffect, useState } from 'react';
function Myreact2() {
    const [name, setname] = useState("bruh");
    const [age, setage] = useState(23);

    useEffect(() => {
        console.log("hello from Hook");
    },[])//using blank[] arraybrackets for single time execute hook
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <button onClick={()=>{setname("harry")}}>update name</button>
            <button onClick={()=>{setage(24)}}>update age</button>
        </div>

    )
}
export default Myreact2;