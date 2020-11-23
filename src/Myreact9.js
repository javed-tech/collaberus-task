import { React, Fragment,useState } from "react";
import {Table} from 'react-bootstrap';
function Myreact9() {
    const [user, setuser] = useState([
        { Name: "anil", Age: 26, Address: "Noida" },
        { Name: "bruice", Age: 28, Address: "germany" },
        { Name: "lily", Age: 29, Address: "america" }
    ]);
    return (
        <Fragment>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         user.map((item,index)=><tr key={index}>
                         <td>{index+1}</td>
                         <td>{item.Name}</td>
                         <td>{item.Age}</td>
                         <td>{item.Address}</td>
                         </tr>
                        )
                    }       
                </tbody>
            </Table>
        </Fragment>
    )
}
export default Myreact9;