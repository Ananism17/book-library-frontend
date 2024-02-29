import React from "react";
import Router from "next/router";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";

//redux imports
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";

//react-icons
import { MdLogout } from "react-icons/md";

const NavbarComponent = () => {
  //redux
  const dispatch = useDispatch();

  const submitHandler = () => {
    const apiUrl = BASE_URL + "api/users/logout";
    axios
      .post(apiUrl, "")
      .then(() => {
        Router.push({
          pathname: "/",
        });
        dispatch(logout());
      })
      .catch((error) => {
        if (error.response?.status == 401) {
          dispatch(logout());
          Router.push({
            pathname: "/",
          });
        }
        console.log(error);
      });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">সাহিত্যের আঙিনা</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button variant="light" className="me-3 mt-2 mb-2">
                বই যোগ করুন
              </Button>
              <Button
                variant="outline-light"
                onClick={submitHandler}
                className="me-3 mt-2 mb-2"
              >
                লগ আউট করুন <MdLogout />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
