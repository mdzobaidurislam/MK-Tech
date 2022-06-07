import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Counter = () => {
  return (
    <div className="counter_section ptb_100">
      <div className="counter_title text-center">
        <h2>Title Counter</h2>
      </div>
      <Container fluid>
        <Row className="justify-content-center pt-5">
          <Col lg={12}>
            <Row>
              <Col lg={4} md={6}>
                <div class="counter_text bg_trans">
                  <div>
                    <h2>1 BN +</h2>
                    <h3>Daily Impressions</h3>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div class="counter_text bg_white">
                  <div>
                    <h2>$5000K+</h2>
                    <h3>Paid</h3>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div class="counter_text bg_primary">
                  <div>
                    <h2>8K+</h2>
                    <h3>Global Publishers</h3>
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

export default Counter;
