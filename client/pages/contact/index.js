import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import axios from "axios";
import {useRouter} from "next/router";

const Contact = () => {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [feedback,setFeedback] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !name || !feedback) return;
        const submit = await axios.post("http://localhost:5000/addfeedback",{
                email,
                name,
                feedback
            }
          );
        const data = await submit;
        console.log(data);
    }
   


    return (
      <Container className="my-2">
     
          <>
            <h4 className="text-center">We Will Love Your Feedback!</h4>
            <Form className="d-flex flex-column justify-content-center">
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

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  value={feedback}
                  onChange={(e) => {
                    setFeedback(e.target.value);
                  }}
                  placeholder="Write Your Feedback"
                />
                <Form.Text className="text-muted">
                  Your Feedback will help us in improving
                </Form.Text>
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
    
      </Container>
    );
}
 
export default Contact;