import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';
import jwtDecode from 'jwt-decode';
import { GlobalProvider } from '../context/GlobalState';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import '../css/login.css'
import request from '../services/api.request';

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
        // let events = await getEvents(data.user_id)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data,
          // events
        })
        // localStorage.setItem('events', JSON.stringify(events))
      //  window.location.reload()
      navigate("/dash", { replace: true });
      window.location.reload()
      });
  }

    // const getEvents = async (id) => {
    //   let options = {
    //     url: `/api/events/?owner=${id}`,
    //     method: 'GET',
    //   }
    //   let resp = await request(options)
    //   return resp.data
    // }

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

