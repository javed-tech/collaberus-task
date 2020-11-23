//component Life cycle and states using in class componenet
import React from 'react';
class Myreact1 extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: "javed",
            Age: 23
        }
        console.log("constructor")
    }
    changedata=()=>{
        this.setState({Name:"Javed_khan",Age:22})
    }
    componentDidMount(){
        console.log("did mount");
    }  
    componentDidUpdate(){
        console.log("did update");
    }
    render(){
        console.log("render");
        return (
            <div>
                <h2>{this.state.Name}</h2>
                <h2>{this.state.Age}</h2>
                <button onClick={this.changedata}>update</button>

            </div>
         );
        }
}
export default Myreact1;