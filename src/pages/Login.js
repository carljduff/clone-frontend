import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import '../css/login.css'
const Login = () => {
    return(
        <div className='login-form'>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
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