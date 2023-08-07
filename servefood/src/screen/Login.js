import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate =useNavigate()
  const [crediatials, setcrediatials] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: crediatials.password,
        email: crediatials.email
      })
    });
    const jsonerr = await response.json()
    console.log(jsonerr.success)
    if(!jsonerr.success){
      alert("Enter valid Credentials")
    }
    if(jsonerr.success){
      localStorage.setItem("authToken",jsonerr.authToken)
      navigate("/")
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
          <Link to="/createuser" className="m-3 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
    </div>
  )
}

// import React, {useState} from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" })
//   let navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/loginuser", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })

//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) {
//       //save the auth toke to local storage and redirect
//       navigate("/");

//     }
//     else {
//       alert("Enter Valid Credentials")
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }
//   return(
//      <div className='container'>
//         <form onSubmit={handleSubmit}>
//           <div className="m-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
//           </div>
//           <div className="m-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//           </div>
//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
//         </form>

//       </div>
//   )
// }
// //   return (
// //     <div className="container">
// //       <div>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Email address
// //             </label>
// //             <input
// //               type="email"
// //               className="form-control"
// //               id="exampleInputEmail1"
// //               aria-describedby="emailHelp"
// //               name='email'
// //               value={credentials.email}
// //               onChange={onChange}
// //             />
// //             <div id="emailHelp" className="form-text">
// //               We'll never share your email with anyone else.
// //             </div>
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               className="form-control"
// //               id="exampleInputPassword1"
// //               name='password'
// //               value={credentials.password}
// //               onChange={onChange}
// //             />
// //           </div>
// //           <button type="submit" className="m-3 btn btn-success">
// //             Submit
// //           </button>
// //           <Link to="/creatuser" className="m-3 btn btn-danger">
// //             I'm a new User
// //           </Link>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }
