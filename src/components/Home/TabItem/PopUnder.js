import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pop from "./../../images/pop.webp";
import linkicon from "./../../icons/linkicon.png";
const PopUnder = () => {
  return (
    <Row>
      <Col lg={5}>
        <div className="tab_thum">
          <Image src={pop} alt="" width="" className="img-fluid" />
        </div>
      </Col>
      <Col lg={7}>
        <div className="tab_content">
          <h3>Pop Under</h3>
          <p>
            Popunder is an ad format of pop traffic. Popunder or clickunder is a
            new tab that appears under the previous page. This type of traffic
            directs the user right to the landing page with the offer.
          </p>
          <Link to="/">Learn more</Link>
          <Image src={linkicon} />
        </div>
      </Col>
    </Row>
  );
};

export default PopUnder;
