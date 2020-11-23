//React Listing
import React, { div } from "react";
function Myreact6(){
    let user=[
       {name:"javed",age:"23",Address:"Faridabad"}, 
       {name:"ed",age:"23"}, 
       {name:"ved",age:"23"}, 

    ];
    return(
        <div>
            {
            user.map((item,i)=>
                <div key={i}>
                  <div>{item.name}</div>  
                  <div>{item.age}</div>  
                  <div>{item.Address}</div>  
                </div>
            )
            }
        </div>
    )
}
export default Myreact6;