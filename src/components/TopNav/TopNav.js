import React from "react";
import { Container, NavLink } from "react-bootstrap";
import "./TopNav.css";
const TopNav = () => {
  return (
    <div className="top_nav">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <div className="logo">
          <NavLink to="/">Logo</NavLink>
        </div>
        <div className="lan">
          <div>
            {" "}
            <span>BN</span> / EN{" "}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
