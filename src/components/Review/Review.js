import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import add from "./../images/ad.jpg";
import native from "./../images/native.jpg";
import skim from "./../images/skim.jpg";
import pop from "./../images/pop.webp";
import slider1 from "./../images/slider1.png";
import slider2 from "./../images/slider2.png";
import "./Review.css";
const Review = () => {
  return (
    <div className="review_section ptb_100">
      <div className=" text-center">
        <h2 className="">Title Review</h2>
      </div>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="review_area pt-5 pb-5">
              <Carousel fade>
                <Carousel.Item interval={10000}>
                  <Row>
                    <Col lg={6}>
                      <div className="review_inner">
                        <div className="review_item">
                          <Row>
                            <Col lg={4}>
                              <div className="review_thum">
                                <Image
                                  src={add}
                                  alt=""
                                  width=""
                                  className="img-fluid"
                                />
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="review_content">
                                <h3>Banner Ad</h3>
                                <p>
                                  This is one of the most popular ads. After
                                  user’s click, this ad opens landing page in
                                  behind. So, the user experience is not
                                  hampered much.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="review_inner">
                        <div className="review_item">
                          <Row>
                            <Col lg={4}>
                              <div className="review_thum">
                                <Image
                                  src={native}
                                  alt=""
                                  width=""
                                  className="img-fluid"
                                />
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="review_content">
                                <h3>Native Ad</h3>
                                <p>
                                  Native ads pose an interesting challenge when
                                  it comes to protecting the user experience.
                                  Normally, the Native ad itself looks perfectly
                                  clean and harmless but the potentially
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                  <Row>
                    <Col lg={6}>
                      <div className="review_inner">
                        <div className="review_item">
                          <Row>
                            <Col lg={4}>
                              <div className="review_thum">
                                <Image
                                  src={skim}
                                  alt=""
                                  width=""
                                  className="img-fluid"
                                />
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="review_content">
                                <h3>Skim </h3>
                                <p>
                                  Skimming means reading a text quickly to get a
                                  general idea of the content. It can help you
                                  make decisions about where to place maximum
                                  focus especially when there is limited time
                                  for reading.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="review_inner">
                        <div className="review_item">
                          <Row>
                            <Col lg={4}>
                              <div className="review_thum">
                                <Image
                                  src={pop}
                                  alt=""
                                  width=""
                                  className="img-fluid"
                                />
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="review_content">
                                <h3>Pop Ad</h3>
                                <p>
                                  Popunder is an ad format of pop traffic.
                                  Popunder or clickunder is a new tab that
                                  appears under the previous page. This type of
                                  traffic directs the user right to the landing
                                  page with the offer.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                  <Row>
                    <Col lg={6}>
                      <div className="review_inner">
                        <div className="review_item">
                          <Row>
                            <Col lg={4}>
                              <div className="review_thum">
                                <Image
                                  src={slider1}
                                  alt=""
                                  width=""
                                  className="img-fluid"
                                />
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="review_content">
                                <h3>Software Development Company </h3>
                                <p>
                                  Peerbits developed a mobile application that
                                  enables a user to create, search, and join
                                  various event. These events could be of music,
                                  dance, or comedy nights. It serves as a great
                                  medium to find and socialize people with
                                  common interests.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="review_inner">
                        <div className="review_item">
                          <Row>
                            <Col lg={4}>
                              <div className="review_thum">
                                <Image
                                  src={slider2}
                                  alt=""
                                  width=""
                                  className="img-fluid"
                                />
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="review_content">
                                <h3>Grocery marketplace application</h3>
                                <p>
                                  While developing this application, we came
                                  across several challenges. We had to maintain
                                  the prices and inventory stocks of the farmers
                                  in real-time. Not only this, we also had to
                                  manage all the deliveries to the restaurant’s
                                  location.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
