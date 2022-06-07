import React from "react";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import instra from "./../icons/in.png";
import fb from "./../icons/fb.png";
import youtube from "./../icons/youtube.png";
const Footer = () => {
  return (
    <div className="ptb_100">
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <div className="footer_about widget">
              <h3>We are social</h3>
              <h4>Follow Us</h4>
              <div className="social_icon">
                <NavLink to="">
                  <Image src={instra} />
                </NavLink>
                <NavLink to="">
                  <Image src={fb} />
                </NavLink>
                <NavLink to="">
                  <Image src={youtube} />
                </NavLink>
              </div>
              <div className="logo">
                <Link to="/">Logo</Link>
              </div>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <div className=" widget">
              <h3>Links</h3>

              <div className="footer_link">
                <NavLink to="">ADVERTISERS</NavLink>
                <NavLink to="">PUBLISHERS</NavLink>
                <NavLink to="">INFLUENCERS</NavLink>
                <NavLink to="">AD FORMATS</NavLink>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className=" widget ft_3">
              <h3>Documentation</h3>

              <div className="footer_link ">
                <NavLink to="">TERMS & CONDITIONS </NavLink>
                <NavLink to="">PRIVACY POLICY </NavLink>
                <NavLink to="">CANCELLATION POLICY </NavLink>
                <NavLink to="">BLOG</NavLink>
              </div>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <div className=" widget ">
              <h3>Support</h3>

              <div className="footer_link">
                <NavLink to="">FAQ</NavLink>
                <NavLink to="">MEDIA KIT </NavLink>
                <NavLink to="">CONTACT US </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
