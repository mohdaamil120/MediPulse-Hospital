import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { URL } from "./Login"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const token = localStorage.getItem("token") || ""

  const [userData, setUserData] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      axios({
        method: "get",
        url: `${URL}/users`,
        params: {
          token,
        },
      })
        .then((response) => {
          const userData = response.data[0]
          if (userData) {
            console.log(userData.name)
            setUserData(userData)
          }
        })
        .catch((error) => console.log(error))
    }
  }, [token])

   const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }


  return (
    <div>
      <h1>Profile</h1>
      {userData && (
        <div>
          <p>First Name: {userData.name}</p>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
