import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../Assets/img/logo.png";
import payment from "../Assets/img/payment.png";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <Container>
        <Row>
          <Col className="mb-4" sm={12} md={2}>
            <h5>Furniture</h5>
            <ul>
              <li>Furniture</li>
              <li>Bathroom</li>
              <li>Bedroom</li>
              <li>Kitchen</li>
              <li>Living Room</li>
              <li>Offices</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <h5>Outdoor</h5>
            <ul>
              <li>Outdoor</li>
              <li>Fencing & Flooring</li>
              <li>Garden</li>
              <li>Outdoor & Patio</li>
              <li>Outdoor Decor</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <h5>Decor & Pillows</h5>
            <ul>
              <li>Decor & Pillows</li>
              <li>Art</li>
              <li>Flowers & Plants</li>
              <li>Rugs</li>
              <li>Wall Decor</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <h5>Appliances</h5>
            <ul>
              <li>Appliances</li>
              <li>Heating & Cooling</li>
              <li>Kitchen Appliances</li>
              <li>Vacuums & Cleaners</li>
              <li>Washers & Dryers</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <h5>Bed & Bath</h5>
            <ul>
              <li>Bed & Bath</li>
              <li>Bathroom Decor</li>
              <li>Bathroom Fixtures</li>
              <li>Bedding</li>
              <li>Shower Accessories</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <h5>Baby & Kids</h5>
            <ul>
              <li>Baby & Kids</li>
              <li>Backyard Play</li>
              <li>Kids Playroom</li>
              <li>Kids Storage</li>
              <li>Nursery Bedding</li>
              <li>Nursery Furniture</li>
            </ul>
          </Col>
        </Row>
        <Row className="py-3">
          <Col
            sm={12}
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={logo} width={155} alt="" />
          </Col>
          <Col
            sm={12}
            lg={6}
            className="mt-3 d-flex flex-column justify-content-center"
          >
            <h6>Need help? Call us: (+800) 1234 5678 90</h6>
            <p>
              Monday – Friday: 8:00 – 21:00 / Saturday – Sunday 9:00 – 18:00
            </p>
          </Col>
          <Col
            sm={12}
            lg={4}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={payment} alt="" width={360} />
          </Col>
        </Row>
        <Row className="py-4 border-none">
          <Col sm={12} md={6}>
            <p>© MyDecor – All Rights Reserved.</p>
          </Col>
          <Col sm={12} md={6}>
            <ul className="d-flex list-unstyled justify-content-between">
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Customer Service</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
