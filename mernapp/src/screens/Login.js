import React, { useState } from "react";
import { Link } from "react-router-dom";
import "C:/Users/arage/OneDrive/Documents/FDA/mernapp/src/Login.css";
export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("hhtp://localhost:4000/api/CreateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials ");
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    // <div>
    //   <div className="login-page">
    //     <div className="background-image">
    //       <img src=" " alt="Background" />
    //     </div>
    //     <div className="login-form-container">
    //       <h1>Login</h1>
    //       <form>
    //         <div className="form-group">
    //           <label htmlForm="username">Username</label>
    //           <input type="text" id="username" name="username" />
    //         </div>
    //         <div className="form-group">
    //           <label htmlForm="password">Password</label>
    //           <input type="password" id="password" name="password" />
    //         </div>
    //         <button type="submit">Login</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
          ></input>
        </div>

        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/CreateUser" className=" m-3 btn btn-danger ">
          I'm a new user
        </Link>
      </form>
    </div>
  );
}
