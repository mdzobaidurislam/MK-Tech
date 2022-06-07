import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Formates = () => {
  return (
    <div className="formates_section ptb_100">
      <div className="heading_title">
        <h2>VERSATILE AD FORMATS</h2>
      </div>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg={12}>
            <div className="tab_menu">
              <NavLink to="pop-under">POP-UNDER</NavLink>
              <NavLink to="banner">BANNER AD</NavLink>
              <NavLink to="native">NATIVE</NavLink>
              <NavLink to="skim">SKIM</NavLink>
            </div>
          </Col>
        </Row>
        <Row className=" pt-5">
          <Col lg={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Formates;
