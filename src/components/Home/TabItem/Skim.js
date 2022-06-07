import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import skim from "./../../images/skim.jpg";
import linkicon from "./../../icons/linkicon.png";
const Skim = () => {
  return (
    <Row>
      <Col lg={5}>
        <div className="tab_thum">
          <Image src={skim} alt="" width="" className="img-fluid" />
        </div>
      </Col>
      <Col lg={7}>
        <div className="tab_content">
          <h3>Skim</h3>
          <p>
            Skimming means reading a text quickly to get a general idea of the
            content. It can help you make decisions about where to place maximum
            focus especially when there is limited time for reading. You do not
            read every word, but just what is essential according to the
            purpose.
          </p>
          <Link to="/">Learn more</Link>
          <Image src={linkicon} />
        </div>
      </Col>
    </Row>
  );
};

export default Skim;
