//Forms in React
import React ,{useState}from 'react';
function Myreact10() {
    const[name,setname]=useState("");
    const[age,setage]=useState("");
    const[address,setaddress]=useState("");
    function check() {
        let data={name,age,address};
        console.log("Data is Here",data);
    }
    return (
        <div>
            Name:<input type="text"onChange={(e)=>{setname(e.target.value)}} value={name}/>
            <br /><br />
            Age:<input type="text"onChange={(e)=>{setage(e.target.value)}} value={age} />
            <br /><br />
            Address:<input type="text"onChange={(e)=>{setaddress(e.target.value)}} value={address} />
            <br /><br />
            <button onClick={check}>Submit</button>
        </div>
    )
}
export default Myreact10;