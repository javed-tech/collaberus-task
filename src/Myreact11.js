import React, { useState, useEffect, Fragment } from 'react';
import { Table } from 'react-bootstrap';
function Myreact11() {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result => {
                console.log("result", result);
                setuser(result.data);
            })
        })
},[]);
return (
    <Fragment>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th> Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item, index) => <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.employee_name}</td>
                        <td>{item.employee_salary}</td>
                        <td>{item.employee_age}</td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
    </Fragment>
)
}
export default Myreact11;