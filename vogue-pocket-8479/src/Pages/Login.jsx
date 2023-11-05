import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
  authRequest,
  authRequestFailure,
  authRequestSuccess,
} from "../Redux/auth/action"
import { Link, useNavigate } from "react-router-dom"

export const URL = `https://vogue-pocket-data.onrender.com`

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [token, setToken] = useState("")

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }

    if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email === "admin@gmail.com" && password === "admin"){
        return (navigate("/admin"))
    }else{

        dispatch(authRequest())
        axios({
              method: "get",
              url: `${URL}/users`,
              params: {
                    email,
                    password,
                  },
                })
                  .then((r) => {
                        dispatch(authRequestSuccess(r.data[0].token))
                        setToken(r.data[0].token)
                        localStorage.setItem("token", r.data[0].token)
                        navigate("/")
                      })
                      .catch((error) => dispatch(authRequestFailure()))
    }
  }

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="email"
//         placeholder="email"
//         onChange={handleChange}
//         name="email"
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={handleChange}
//         name="password"
//       />
//       <button onClick={handleSubmit}>Login</button>

//       <div>
//         <Link to="/register">Register</Link>
//       </div>
//     </div>
//   )
return (
    <div style={{ textAlign: "center", margin: "auto", width: "300px" }}>
      <h1 style={{ fontSize: "24px" }}>Login</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <button
        onClick={handleSubmit}
        style={{
          background: "black",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Login
      </button>

      <div style={{ marginTop: "10px", fontSize: "16px" }}>
        <Link to="/register" style={{ textDecoration: "none", color: "blue" }}>
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login
