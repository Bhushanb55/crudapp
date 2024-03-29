import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState({     // create object user and setuser to store user state
        name: "",
        username : "",
        email: "",
        phone: "",
        website: "",
        password: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    
    return (
        <div className="container py-4">
      <Link className="btn btn-primary" to="/">back to Home</Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group -50">
        <li className="list-group-item">name: {user.name}</li>5
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
        <li className="list-group-item">password: {user.password}</li>
      </ul>
    </div>
  );
}

export default User;