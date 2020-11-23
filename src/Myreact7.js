//React conditions
import React, { useState } from "react";
function Myreact7(){
    const[user,setuser]=useState([
       {name:"javed",age:"23",Address:"Faridabad"}, 
       {name:"ed",age:"23"}, 
       {name:"ved",age:"23"}, 
    ]);
    return(
        <div>
            {
            user.length==3?<div>yes,user length is right</div>:<div>No,user length is 3</div>
            }
        </div>
    )
}
export default Myreact7;