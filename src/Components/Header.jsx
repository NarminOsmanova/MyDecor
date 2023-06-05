import React, { useContext, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import { InputGroup, Form, Button } from "react-bootstrap";
import logo from "../Assets/img/logo.png";
import Badge from "react-bootstrap/Badge";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import products from "../Data/products";
import SingleCard3 from "./SingleCard3";
import { ProductContext } from "../context/ProductContext";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";

const info = {
  useremail: "info@example.com",
  userpass: "info1234",
};

const Header = () => {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const [value, setValue] = useState("");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const [icon, setIcon] = useState("fa-solid fa-eye");
  const [type, setType] = useState("password");

  const [lgShow, setLgShow] = useState(false);
  // const [value, setValue] = useState("");
  const [data, setData] = useContext(ProductContext);

  const inputRef = useRef();
  const navigate = useNavigate();

  const eye = () => {
    if (icon === "fa-solid fa-eye") {
      setIcon("fa-solid fa-eye-slash");
      setType("text");
    } else {
      setIcon("fa-solid fa-eye");
      setType("password");
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setAlertText("please, fill this input");
      setAlertColor("alert-warning");
    } else if (email === info.useremail && pass === info.userpass) {
      setAlertText("Login is successfull");
      setAlertColor("alert-success");
      navigate("/cart");
    } else {
      setAlertText("password or email is wrong!");
      setAlertColor("alert-danger");
    }
  };

  return (
    <Navbar expand="lg" className="bg-light" sticky="top">
      <Container className="my-2">
        <span className="me-5 mt-2">
          <i className="fa-solid fa-bars fs-5 text-danger"></i>
        </span>
        <Navbar.Brand href="#">
          <img src={logo} alt="" width={140} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 fw-semibold">
            <NavLink to="/" className="active nav-link text-danger">
              Homepages
            </NavLink>
            <NavLink to="/products" className="nav-link text-black">
              Shop({data.length})
            </NavLink>
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Blog Fullwidth
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Blog Sidebar</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Blog Masonry</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Blog Detail</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Pages"
              id="navbarScrollingDropdown"
              className="d-flex"
            >
              <div>
                <NavDropdown.Item href="#action3">Typography</NavDropdown.Item>
                <NavDropdown.Item href="#action4">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Coming Soon</NavDropdown.Item>
                <NavDropdown.Item href="#action4">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action4">404 Page</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Shipping & Returns
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item href="#action5">
                  Blog Standard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Blog Fullwidth
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Blog Masonry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Blog Detail</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Portfolio</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Portfolio Detail
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <NavLink to="/contact" className="nav-link text-black">
              Contact us
            </NavLink>
          </Nav>

          <div className=" d-flex justify-content-center">
            <button type="button" onClick={() => setLgShow(true)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <Modal
              size="xl"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title
                  className="text-center"
                  id="example-modal-sizes-title-lg"
                >
                  Search For Products
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setValue(inputRef.current.value);
                    setData(products);
                  }}
                >
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search for products"
                      ref={inputRef}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        setValue(inputRef.current.value);
                        setData(products);
                      }}
                      id="button-addon2"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </Button>
                  </InputGroup>
                </Form>
                <h3 className="text-center my-4 fw-semibold">{`Search results: ${value}`}</h3>
                <Row className="g-3">
                  {data.length === 0 ? (
                    <div></div>
                  ) : data
                      .filter((p) =>
                        p.title.toLocaleLowerCase().includes(value)
                      )
                      .map((fd) => (
                        <SingleCard3
                          key={fd.id}
                          img={fd.img}
                          title={fd.title}
                          previousprice={fd.previousprice}
                          price={fd.price}
                          link1={fd.link1}
                          link2={fd.link2}
                        />
                      )).length === 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img
                        src="https://www.pngkit.com/png/detail/90-901653_exclamation-mark-png-exclamation-mark-icon-png.png"
                        width={60}
                        height={60}
                        alt=""
                      />
                      <p className="mt-3">
                        No products were found matching your selection.
                      </p>
                    </div>
                  ) : (
                    data
                      .filter((p) =>
                        p.title.toLocaleLowerCase().includes(value)
                      )
                      .map((fd) => (
                        <SingleCard3
                          key={fd.id}
                          img={fd.img}
                          title={fd.title}
                          previousprice={fd.previousprice}
                          price={fd.price}
                          link1={fd.link1}
                          link2={fd.link2}
                        />
                      ))
                  )}
                </Row>
              </Modal.Body>
            </Modal>

            <Dropdown>
              <Dropdown.Toggle
                as={NavLink}
                variant="white"
                className="btn-outline-none"
                id="dropdown-basic"
              >
                <span className="ms-3">
                  <i className="fa-regular fa-user"></i>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="d-none d-md-block">
                <div className="container">
                  <h6 className={`alert ${alertColor}`}>{alertText}</h6>
                  <h6 className="mb-4">LOGIN</h6>
                  <Form onSubmit={loginSubmit}>
                    <div className="mb-3">
                      <label className="form-label">
                        Username or Email Address
                      </label>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                      />
                    </div>
                    <label className="form-label">Password</label>
                    <br />
                    <div className="input-group mb-3">
                      <input
                        onChange={(e) => {
                          setPass(e.target.value);
                        }}
                        type={type}
                        className="form-control"
                      />
                      <button
                        onClick={eye}
                        className="btn btn-outline-secondary"
                      >
                        <i className={icon}></i>
                      </button>
                    </div>
                    <div className="mb-3 d-flex form-check p-0 justify-content-between">
                      <button type="submit" className="btn btn-dark">
                        Login
                      </button>
                      <div className="d-flex justify-content-center align-items-center">
                        <input
                          type="checkbox"
                          className="form-check-input me-2"
                        />
                        <label className="form-check-label">Remember me</label>
                      </div>
                    </div>
                  </Form>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <LinkContainer to="/wishlist">
              <span className="me-3 position-relative">
                <i className="fa-regular fa-heart"></i>
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalWishlistItems}
                </Badge>
              </span>
            </LinkContainer>
            <div className="dropdown position-relative">
              <span
                className="position-relative "
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <i className="fa-solid fa-bag-shopping"></i>
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalItems}
                </Badge>
              </span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
