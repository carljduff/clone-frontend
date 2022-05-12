import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";


const Register = ({prevPage}) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user)
    navigate("/dash", { replace: true });
  }

  return (
    <div>


      <Form onSubmit={handleRegister}>
      <Form.Group className='mb-3'>
        <Form.Label>Username:</Form.Label>
        <Form.Control type='text' id='username' name='username' placeholder="Enter Username" onChange={(e) => handleChange('username', e.target.value)} required/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Email:</Form.Label>
        <Form.Control type='text' id='email' name='email' placeholder="Enter email" onChange={(e) => handleChange('email', e.target.value)} required/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password:</Form.Label>
        <Form.Control type='password' id='pass' name='password' minLength='8' placeholder="Enter Password" onChange={(e) => handleChange('password', e.target.value)} required/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control type='password' id='passConf' name='password' placeholder="Enter Password" onChange={(e) => handleChange('passwordConf', e.target.value)} required/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>First Name:</Form.Label>
        <Form.Control type='text' id='firstName' name='fname' placeholder="Enter First Name" onChange={(e) => handleChange('firstName', e.target.value)} required/>
      </Form.Group>
      

      <Form.Group className='mb-3'>
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type='text' id='lastName' name='lname' placeholder="Enter Last Name" onChange={(e) => handleChange('lastName', e.target.value)} required/>
      </Form.Group>
      <Button type='submit' value="Register" disabled={(
        user.password &&
        user.password.length >= 8 &&
        user.password === user.passwordConf &&
        user.firstName && 
        user.lastName &&
        user.email
      ) ? false : true}>Register</Button>
<Button onClick={prevPage}>Back</Button>
      </Form>
    </div>
    // <div className="c-form">
    //   <form onSubmit={handleRegister}>
    //     <div>
    //       <label htmlFor="username">Username:</label> <br/>
    //       <input
    //         type="text"
    //         id="username"
    //         name="username"
    //         onChange={(e) => handleChange('username', e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="text"
    //         id="email"
    //         name="email"
    //         onChange={(e) => handleChange('email', e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="pass">Password (8 characters minimum):</label>
    //       <input
    //         type="password"
    //         id="pass"
    //         name="password"
    //         minLength="8"
    //         required
    //         onChange={(e) => handleChange('password', e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="passConf">Confirm Password:</label>
    //       <input
    //         type="password"
    //         id="passConf"
    //         name="password"
    //         minLength="8"
    //         required
    //         onChange={(e) => handleChange('passwordConf', e.target.value)} />
    //     </div>
    //     <div>
    //       <label htmlFor="firstName">First Name:</label>
    //       <input
    //         type="text"
    //         id="firstName"
    //         name="fname"
          
    //         required
    //         onChange={(e) => handleChange('firstName', e.target.value)} />
    //     </div>
    //     <div>
    //       <label htmlFor="lastName">Last Name:</label>
    //       <input
    //         type="text"
    //         id="lastName"
    //         name="lname"
    //         required
    //         onChange={(e) => handleChange('lastName', e.target.value)} />
    //     </div>
    //     <input
    //       type="submit"
    //       value="Register"
    //       disabled={(
    //         user.password &&
    //         user.password.length >= 8 &&
    //         user.password === user.passwordConf &&
    //         user.firstName &&
    //         user.lastName &&
    //         user.email
    //       ) ? false : true}
    //     />
    //     <Button onClick={prevPage}>Back</Button>
    //   </form>
    // </div>
  )

}

export default Register