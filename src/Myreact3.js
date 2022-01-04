//React props in class component(React Props are like function arguments in JavaScript and attributes in HTML)
import React from 'react';
class Myreact3 extends React.Component{
    constructor(){
        super();
        console.log("this is a constructor");
    }
    componentDidMount(){
        console.log("this is props =",this.props.name);
    }
    componentDidUpdate(){
        console.log(" props updated ",this.props.name);
    } 
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.home}</h2>

            </div>
        )
    }
}
export default Myreact3;