import axios from 'axios'
import React, { useState } from 'react'

export default function FormCard() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log(email, password)
    axios.post("https://reqres.in/api/login", {
      email: email,
      password: password
    })
      .then(response => {
        // console.log(response)
        alert('success')
        window.location.href = "http://google.com";
      })
      .catch(error => {
        // console.log(error)
        alert('Ohhh! try again')
      })
  }

  // console.log(email, password)

  return (
    <div>
      <div className='container'>
        <code>
          "email": "eve.holt@reqres.in",
          "password": "cityslicka"
        </code> <br />

        Email :  <input type="text" className='form-control' value={email} onChange={handleEmail} /> <br />
        Password :  <input type="password" className='form-control' value={password} onChange={handlePassword} /> <br />
        <button onClick={handleApi}>Login</button>
      </div>
    </div>
  )
}
