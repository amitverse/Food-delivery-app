import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [crediatials, setcrediatials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: crediatials.name,
        location: crediatials.geolocation,
        password: crediatials.password,
        email: crediatials.email
      })
    });
    const jsonerr = await response.json()
    console.log(jsonerr.success)
    if(!jsonerr.success){
      console.log("Enter valid Credentials")
    }
  }
  const onChange = (e) => {
    setcrediatials({ ...crediatials, [e.target.name]: e.target.value })
  }
  return (
    <div className="container">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="name" className="form-control" name='name' value={crediatials.name} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name='email'
              value={crediatials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name='geolocation'
              value={crediatials.geolocation}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name='password'
              value={crediatials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </div>
  );
}
