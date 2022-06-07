import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import icon1 from "../icons/icon1.png";
import icon2 from "../icons/icon2.png";
import icon3 from "../icons/icon3.png";

const Aviable = () => {
  return (
    <div className="aviable_section ptb_100">
      <div className="heading_title">
        <h2>AVAILABLE FOR EVERYONE</h2>
      </div>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg={10}>
            <Row>
              <Col lg={4} md={6}>
                <div class="available_item">
                  <div class="icon_thum">
                    <img src={icon1} alt="" />
                  </div>
                  <div class="available_text">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Excepturi nisi provident alias a iure cum quam optio,
                    </p>
                    <Link to="http" class="custom_btn available_btn">
                      Hello 1
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div class="available_item">
                  <div class="icon_thum">
                    <img src={icon2} alt="" />
                  </div>
                  <div class="available_text">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Excepturi nisi provident alias a iure cum quam optio,
                    </p>
                    <Link to="http" class="custom_btn available_btn">
                      Hello 2
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div class="available_item">
                  <div class="icon_thum">
                    <img src={icon3} alt="" />
                  </div>
                  <div class="available_text">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Excepturi nisi provident alias a iure cum quam optio,
                    </p>
                    <Link to="http" class="custom_btn available_btn">
                      Hello 3
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Aviable;
