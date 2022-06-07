import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import add from "./../../images/ad.jpg";
import linkicon from "./../../icons/linkicon.png";

const BannerAd = () => {
  return (
    <Row>
      <Col lg={5}>
        <div className="tab_thum">
          <Image src={add} alt="" width="" className="img-fluid" />
        </div>
      </Col>
      <Col lg={7}>
        <div className="tab_content">
          <h3>Banner Ad</h3>
          <p>
            This is one of the most popular ads. After user’s click, this ad
            opens landing page in behind. So, the user experience is not
            hampered much.
          </p>
          <Link to="/">Learn more</Link>
          <Image src={linkicon} />
        </div>
      </Col>
    </Row>
  );
};

export default BannerAd;
