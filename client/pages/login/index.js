import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import axios from "axios";
import Link from "next/link";
import {useDispatch,useSelector} from "react-redux";
import { loginSuccess } from "../../Redux/userSlice";

const Login =  () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !password) return;
        const submit = await axios.post("https://xenonstack-backend-project.herokuapp.com/login/",{ email,password });
        
        const ans = submit.data.result
        dispatch(loginSuccess(ans));
        
        
    }
    return (
      <Container className="my-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-flex">
            <p>
                New User?
            </p>
            <Link href="/register">
              <p className="mx-2">Register Here</p>
            </Link>
          </div>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
}
 
export default Login;