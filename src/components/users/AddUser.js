import axios  from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
        //let history = useNavigate();
        const [user, setUser] = useState({     // create object user and setuser to store user state
           name: "",
           username : "",
           email: "",
           phone: "",
           website: "",
           password: ""
        });
        const [userErrors, setUserErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);


        const {name, username, email,  phone, website, password} = user;   // it creates a local var destruction and extract it (it saves us from write like user.name, user.email)
        
        const onInputChange = e => {      // e as a event to change value in adduser
            setUser({...user,[e.target.name]: e.target.value});  // it get all the values and using (...)spread operator it get all the previous data
        };

        const onSubmit = async e => {
            e.preventDefault();       // it stops the default behaviour from refreshing
            await axios.post("http://localhost:3003/users", user);
            //history("/");   // it will redirect to the home page after addData
            setUserErrors(validate(user));
            setIsSubmit(true);
        };
        useEffect(() => {
            console.log(userErrors);
            if(Object.keys(userErrors).length === 0 && isSubmit){
                console.log(user);
            }
        }, [userErrors]);


        const validate = (values) => {
            const errors = {}
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if(!values.name){
                errors.name = "name is required";
            }if(!values.username){
                errors.username = "username is required";
            }if(!values.email){
                errors.email = "email is required";
            }else if(!regex.test(values.email)){
                errors.email = "This is not a valid email format!!"
            }
            if(!values.phone){
                errors.phone = "phone no is required";
            }if(!values.website){
                errors.website = "website is required";
            }
            return errors;
        };



    return(
        <div className="container">
        {Object.keys(userErrors).length === 0 && isSubmit ? 
            (<div className="ui message success">Signed in Successfully</div>)
            : (<pre>{JSON.stringify()}</pre>)
        }

            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
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
                    <p>{userErrors.name}</p>
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
                    <p>{userErrors.username}</p>
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
                    <p>{userErrors.email}</p>
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
                    <p>{userErrors.phone}</p>
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
                    <p>{userErrors.website}</p>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Password"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)} 
                        />
                    </div>
                    <p>{userErrors.password}</p>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
};

export default AddUser;