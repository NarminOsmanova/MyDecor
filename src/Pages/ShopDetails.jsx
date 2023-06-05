import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ProductContext } from "../context/ProductContext";
import ReactImageMagnify from "react-image-magnify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopDetails = (props) => {
  const { addItem } = useCart();
  const [data, setData] = useContext(ProductContext);
  const [value, setValue] = useState(1);
  const notify = () =>
    toast.success("👌 Product has been add to your cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const { url } = useParams();
  const productdetails = data.find((p) => p.id === url);

  console.log(
    data.find((p) => p.id),
    url
  );

  return (
    <div className="container shopdetails col-xxl-8 px-4 py-5">
      <h5 className="text-center">{alert}</h5>
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: productdetails.img,
              },
              largeImage: {
                src: productdetails.img,
                width: 1200,
                height: 1800,
              },
            }}
          />
          {/* <img src={productdetails.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" /> */}
        </div>
        <div className="col-lg-6">
          <h3 className="display-7 fw-bold lh-1 mb-4">
            {productdetails.title}
          </h3>
          <div className="d-flex justify-content-between w-75">
            <p>
              Status:{" "}
              <span>{productdetails.status ? "In Stock" : "Out Of Stock"}</span>
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
          <h6>{productdetails.description}</h6>
          <ul className="text-secondary">
            <li>{productdetails.li1}</li>
            <li>{productdetails.li2}</li>
            <li>{productdetails.li3}</li>
          </ul>
          <p className="lead fw-semibold">${productdetails.price}</p>
          <div className="d-flex">
            <div className="input me-3 d-flex align-items-center">
              <input
                type="button"
                value="-"
                className="minus"
                onClick={() => {
                  if (value > 0) {
                    setValue(value - 1);
                  }
                }}
              />
              <input type="text" value={value} />
              <input
                type="button"
                value="+"
                className="plus"
                onClick={() => {
                  setValue(value + 1);
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

              {productdetails.status ? (
                <>
                  <Button
                    variant="dark"
                    onClick={() => {
                      notify(addItem(productdetails, value));
                    }}
                  >
                    Add to cart
                  </Button>
                  <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />{" "}
                </>
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
          {console.log(setData)}
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
