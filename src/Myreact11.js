import React, { useState, useEffect, Fragment } from 'react';
import { Table } from 'react-bootstrap';

function Myreact11() {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2").then((data) => {
            data.json().then(result => {
                console.log("result", result);
                setuser(result.data);
            })
        })
    }, []);
    return ( <Fragment>
        <Table striped bordered hover variant = "dark" >
        <thead >
        <tr >
        <th > Id </th> 
        <th > Email </th>
        <th > FirstName </th> 
        <th > LastName </th>
        <th > Avatar </th>
        </tr > 
        </thead>  
        <tbody > {
            user.map((item, index) => < tr key = { index } >

                <td > { item.id } </td>  
                <td > { item.email } </td>  
                <td > { item.first_name } </td>  
                <td > { item.last_name } </td>  
                <td > { item.avatar } </td>  
                </tr >
            )
        } 
        </tbody>  
       </ Table > 
        </Fragment>
    )
}
export default Myreact11;