import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import native from "./../../images/native.jpg";
import linkicon from "./../../icons/linkicon.png";
const Native = () => {
  return (
    <Row>
      <Col lg={5}>
        <div className="tab_thum">
          <Image src={native} alt="" width="" className="img-fluid" />
        </div>
      </Col>
      <Col lg={7}>
        <div className="tab_content">
          <h3>Native</h3>
          <p>
            Native ads pose an interesting challenge when it comes to protecting
            the user experience. Normally, the Native ad itself looks perfectly
            clean and harmless but the potentially dangerous elements lurk
            underneath the surface when a user engages with the Native ad.
          </p>
          <Link to="/">Learn more</Link>
          <Image src={linkicon} />
        </div>
      </Col>
    </Row>
  );
};

export default Native;
