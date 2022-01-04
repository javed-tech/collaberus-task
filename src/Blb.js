// using class component in other class component
import React from 'react';
class About extends React.Component{
    
    render(){
        let data= `{
            name:"javed",age:23,Qual:"B.tech"
        };`
        return(
            <div>
               <h1>This is class component</h1>
               <h1>{data}</h1>
               <Aboutus /> 
            </div>

        )
    }
}
function Aboutus (){
    
        return(
            <div>
               <h1>This is function component</h1> 
            </div>

        )
}
export default About;