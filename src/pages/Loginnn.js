import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';
import jwtDecode from 'jwt-decode';
import '../css/login.css'
const Login = () => {
  let navigate = useNavigate();
  const [ state, dispatch ] = useGlobalState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService
      .login(username, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data
        })
       
      });
  }

    return(
        <div className='login-form'>
            <Form onSubmit={handleLogin}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username:</Form.Label>
    <Form.Control onChange={(e) => setUsername(e.target.value)}  placeholder='Enter Username' />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={(e) => setPassword(e.target.value)} required type="password" placeholder='Enter Password'/>
  </Form.Group>
 
  <div className='sign-btn-container'>
  <Button className='signin-btn' variant="primary" type="submit">
    Sign In
  </Button>
  <Button className='signup-btn' variant="primary" type="submit">
    Sign Up
  </Button>
  </div>
</Form>
        </div>




    )
}

export default Login;

