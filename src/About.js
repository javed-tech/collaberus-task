// using class component in other class component
import React from 'react';
class About extends React.Component{
    render(){
        return(
            <div>
               <h1>This is class component</h1>
               <Aboutus /> 
            </div>

        )
    }
}
class Aboutus extends React.Component{
    render(){
        return(
            <div>
               <h1>This is multi class component</h1> 
            </div>

        )
    }
}
export default About;