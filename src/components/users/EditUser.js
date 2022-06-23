import axios  from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    let history = useNavigate();
    const { id } = useParams();
        const [user, setUser] = useState({ // create object user and setuser to store user state
           name: "",
           username : "",
           email: "",
           phone: "",
           website: "",
           password: ""
        });

        const {name, username, email,  phone, website, password} = user;   // it creates a local var destruction and extract it (it saves us from write like user.name, user.email)
        
        const onInputChange = e => {      // e as a event to change value in adduser
            setUser({...user,[e.target.name]: e.target.value});  // it get all the values and using (...)spread operator it get all the previous data
        };

        useEffect(() => {
            loadUser();
        }, []); //dependancy set to 1

        const onSubmit = async e => {
            e.preventDefault();       // it stops the default behaviour
            await axios.put(`http://localhost:3003/users/${id}`, user);
            history.push("/");
        };

        const loadUser = async () => {
            const result = await axios.get(`http://localhost:3003/users/${id}`);
            setUser(result.data);
        };

        

     return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}     //in onchage we craete a fun inside we call again a fun onInput chnge
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)} 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)} 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)} 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)} 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)} 
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;