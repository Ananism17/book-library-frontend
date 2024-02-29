import React, { useState } from "react";
import Link from "next/link";

//react-bootstrap
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

//redux imports
import { useDispatch } from "react-redux";
import { auth } from "../../store/actions";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginComponent = () => {
  //login-variables
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // REDUX
    const dispatch = useDispatch(auth(email, password));

  //boolean
  const [passwordVisible, setPasswordVisible] = useState(false);

  //password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  //login function
  const login = (e) => {
    e.preventDefault();
    dispatch(auth(email, password));
  };

  return (
    <>
      <div className="login-container">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="login-card">
                <div className="text-center mt-4">
                  <h2 style={{ color: "white" }}>সাহিত্যের আঙিনা</h2>
                </div>
                <Card.Body>
                  {/* <h2 className="text-center mt-4">Login</h2> */}
                  <Form className="mt-4">
                    <Form.Group>
                      <Form.Label style={{ color: "white" }}>ইমেইল</Form.Label>
                      <Form.Control
                        type="text"
                        value={email || ""}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="custom-input"
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group className="mt-4">
                      <Form.Label style={{ color: "white" }}>পাসওয়ার্ড</Form.Label>
                      <div className="password-input">
                        <Form.Control
                          type={passwordVisible ? "text" : "password"}
                          value={password || ""}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          className="custom-input"
                          size="lg"
                        />
                        <span
                          className="password-icon"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? (
                            <AiOutlineEyeInvisible />
                          ) : (
                            <AiOutlineEye />
                          )}
                        </span>
                      </div>
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="custom-button-contained mt-4"
                      onClick={login}
                    >
                      লগইন করুন
                    </Button>
                  </Form>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LoginComponent;
