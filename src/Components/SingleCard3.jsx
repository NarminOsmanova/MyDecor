import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";

const SingleCard3 = ({
  img,
  title,
  previousprice,
  price,
  link1,
  link2,
  id,
  alldata,
  status,
  description,
  li1,
  li2,
  li3,
  data1,
}) => {
  const [counter, setCounter] = useState(1);
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  return (
    <Col sm={12} md={3}>
      <Card className="border-0">
        <div className="image position-relative">
          <Card.Img variant="top" src={img} />
          <div className="position-absolute overlay d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal${id}`}
            >
              Quick view
            </button>

            <div className="modal" id={`exampleModal${id}`} tabIndex={-1}>
              <div className="modal-dialog  modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="d-flex justify-content-end pe-3 pt-3">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    key={id}
                    className="container-fluid shopdetails col-xxl-8 px-4 py-5"
                  >
                    <div className="row flex-lg-row align-items-center g-5 py-5">
                      <div className="col-10 col-sm-8 col-lg-6">
                        <img
                          src={img}
                          className="d-block mx-lg-auto img-fluid"
                          alt="Bootstrap Themes"
                          width={700}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h3 className="display-7 fw-bold lh-1 mb-4">{title}</h3>
                        <div className="d-flex justify-content-between w-75">
                          <p>
                            Status:{" "}
                            <span>{status ? "In Stock" : "Out Of Stock"}</span>
                          </p>
                          <div className="icon">
                            <a
                              href="https://www.facebook.com/login.php?skip_api_login=1&"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="ps-0">
                                <i className="fa-brands fa-facebook-f"></i>
                              </span>
                            </a>
                            <a
                              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemo.theme"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>
                                <i className="fa-brands fa-twitter"></i>
                              </span>
                            </a>
                            <a
                              href="https://www.pinterest.com/pin/create/button/?url=https"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>
                                <i className="fa-brands fa-pinterest"></i>
                              </span>
                            </a>
                            <a
                              href="https://www.linkedin.com/uas/login?session_redirect="
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>
                                <i className="fa-brands fa-linkedin-in"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <h6>{description}</h6>
                        <ul className="text-secondary">
                          <li>{li1}</li>
                          <li>{li2}</li>
                          <li>{li3}</li>
                        </ul>
                        <p className="lead fw-semibold">${price}</p>
                        <div className="d-flex">
                          <div className="input me-3 d-flex align-items-center">
                            <input
                              type="button"
                              value="-"
                              className="minus"
                              onClick={() => {
                                if (counter > 0) {
                                  setCounter(counter - 1);
                                }
                              }}
                            />
                            <input type="text" value={counter} />
                            <input
                              type="button"
                              value="+"
                              className="plus"
                              onClick={() => {
                                setCounter(counter + 1);
                              }}
                            />
                          </div>
                          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link
                              to="/products"
                              className="btn btn-primary btn-lg px-4 me-md-2"
                            >
                              Back
                            </Link>
                            {status ? (
                              <Button
                                variant="dark"
                                onClick={() => {
                                  addItem(alldata, counter);
                                }}
                              >
                                Add to cart
                              </Button>
                            ) : (
                              <Button variant="dark">Add to cart</Button>
                            )}
                          </div>
                        </div>
                        <div className="mt-3">
                          <LinkContainer to="/wishlist">
                            <span>
                              <i className="fa-solid fa-heart"></i> Wishlist
                            </span>
                          </LinkContainer>
                          <span className="ms-3">
                            <i className="fa-solid fa-code-compare"></i> Compare
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card.Body>
          <LinkContainer to={`/products/${id}`}>
            <Card.Title className="fs-6">{title}</Card.Title>
          </LinkContainer>
          <Card.Text className="text-danger">
            <del className="text-secondary me-2">{previousprice}</del>${price}
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <span>
                <i className="fa-solid fa-plus me-2"></i>
              </span>
              <button
                className="link border-0 bg-white text-secondary"
                onClick={() => addItem(alldata)}
              >
                {link2}
              </button>
              <LinkContainer to={`/products/${id}`}>
                <a className="text-decoration-none" href="/">
                  {link1}
                </a>
              </LinkContainer>
            </div>
            <div className="icon">
              <span
                className="me-3"
                onClick={() => {
                  addWishlistItem(alldata);
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </span>
              <span>
                <i className="fa-solid fa-code-compare"></i>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard3;
