import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate, NavLink, useParams } from 'react-router-dom';

const DeleteUser = () => {
    let history = useNavigate();
    const [user, setUser] = useState({     // create object user and setuser to store user state
        name: "",
        username : "",
        email: "",
        phone: "",
        website: "" 
    });
    const { id } = useParams();
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
        history.push("/");
    };


    // const deleteUser = async e => {
    //     e.preventDefault();       // it stops the default behaviour
    //     await axios.delete(`http://localhost:3003/users/${id}`, user);
    //     loadUsers();
    //     history.push("/");
    // };

    
    return (
        <div className="container py-4">
      
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      {/* <form deleteUser={e => deleteUser(e)}> */}
            <ul className="list-group -50">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">user name: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website: {user.website}</li>
            </ul>
            <button className="btn btn-danger mb-3">DELETE USER</button>
            <NavLink className="btn btn-danger" onclick={() => deleteUser(user.id)}>Delete</NavLink>

    {/* </form> */}
      {/* <Link className="btn btn-primary" to="/">back to Home</Link>
      <Link className="btn btn-danger" onclick={() => deleteUser(user.id)}>Delete</Link> */}
    </div>

    

  );
}

export default DeleteUser;