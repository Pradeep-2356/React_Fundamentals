import { useState } from "react";

export default function Form(){
    let[formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });

    // let handleNameChange = (event) =>{
    //     setFullName(event.target.value);
    // };

    // let handleUsername = (event) =>{
    //     setUserName(event.target.value);
    // };

    let handleInputChange = () =>{
        // let fieldName = event.target.name;
        // let newVal = event.target.value;
        setFormData((currData) =>{
          return {...currData, [event.target.name]: event.target.value};  
        });
    };

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        });
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="fullname">Full Name </label>
            <input id = "fullname" placeholder="Enter full name" type="text" value={formData.fullName} name="fullName" onChange={handleInputChange}/>
            <br></br>
            <br></br>

            <label htmlFor="username">Username </label>
            <input id = "username" placeholder="Enter username name" type="text" value={formData.userName} name="userName" onChange={handleInputChange}/>
            <br></br>
            <br></br>

            <label htmlFor="password">Password </label>
            <input id = "password" placeholder="Enter password" type="password" value={formData.password} name="password" onChange={handleInputChange}/>
            <br></br>
            <br></br>

            <button>Submit</button>
        </form>
    );
}