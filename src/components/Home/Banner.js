import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from "../images/banner1.png";
const Banner = () => {
  return (
    <div className="banner_section ptb_100">
      <Container>
        <Row>
          <Col lg={7}>
            <div class="banner_content">
              <h1>
                Creative <span>software</span> Development Company
              </h1>
              <p>
                Peerbits is a leading software development company with 10+
                years of experience providing top-rated software development
                services leveraging vast experience, multi-domain expertise,
              </p>
              <Link to="" class="custom_btn">
                View Case
              </Link>
            </div>
          </Col>
          <Col lg={5}>
            <Image src={banner1} alt="" width="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
