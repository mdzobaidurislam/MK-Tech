import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TopNav from "../TopNav/TopNav";

const Header = () => {
  return (
    <>
      <TopNav />
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 main_menu" navbarScroll>
              <Nav.Link className="active" as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                ADVERTISERS
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                PUBLISHERS
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                INFLUENCERS
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                AD FORMATS
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                BLOG
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                CONTACT US
              </Nav.Link>
            </Nav>
            <div className="d-flex button_area">
              <Nav.Link as={Link} className="login_btn" to="/about">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="sign_up_btn">
                SIGN UP
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
