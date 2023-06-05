import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const {
    items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    emptyCart,
    cartTotal,
  } = useCart();

  const notify = () =>
    toast("⭐ Product removed!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return isEmpty ? (
    <div className="my-5">
      <div className="text-center mb-2">
        <LinkContainer to="/">
          <span>Home </span>
        </LinkContainer>
        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <span className="ms-2">Cart</span>
      </div>
      <h1 className="text-center fw-bolder mb-5">Cart</h1>
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <img
          width={120}
          src="https://cdn-icons-png.flaticon.com/512/372/372705.png"
          alt=""
        />
        <p className="fw-semibold mt-4" style={{ fontSize: "14px" }}>
          YOUR CART IS CURRENTLY EMPTY.
        </p>
        <LinkContainer to="/products">
          <Button
            variant="outline-dark"
            className="fw-semibold py-2 px-3"
            size="sm"
          >
            RETURN TO SHOP
          </Button>
        </LinkContainer>
      </div>
    </div>
  ) : (
    <div className="cart my-5 container">
      <div className="row">
        <div className="text-center mb-2">
          <LinkContainer to="/">
            <span>Home </span>
          </LinkContainer>
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="ms-2">Cart</span>
        </div>
        <h1 className="text-center fw-bolder mb-5">Cart</h1>
        <div className="col-12 col-lg-8 pe-5">
          <Table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        className="me-2"
                        src={item.img}
                        width={120}
                        height={120}
                        alt=""
                      />{" "}
                      <span>{item.title}</span>{" "}
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <input
                        type="button"
                        value="-"
                        className="minus"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      />
                      <input type="text" value={item.quantity} />
                      <input
                        type="button"
                        value="+"
                        className="plus"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      />
                    </td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                      <span
                        onClick={() => {
                          notify(removeItem(item.id));
                        }}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                      <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="text-center">
            <span
              className="fw-semibold"
              onClick={() => {
                emptyCart();
              }}
            >
              <i className="fa-regular fa-trash-can"></i> EMPTY CART
            </span>
          </div>
        </div>
        <div className="col-12 col-lg-4 ps-5 mb-5">
          <h2 className="fs-6 mb-2">CART TOTALS</h2>
          <table>
            <tr>
              <th>SUBTOTAL</th>
              <td>
                <span className="">${cartTotal}</span>
              </td>
            </tr>
            <tr>
              <th>SHIPPING</th>
              <td style={{ textAlign: "left" }}>
                <ul className="list-unstyled ms-5">
                  <li>
                    <input type="radio" name="shipping" id="freeshipping" />
                    <label className="ms-2" htmlFor="freeshipping">
                      Free shipping
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="shipping" id="local" />
                    <label htmlFor="local" className="ms-2">
                      Local Pickup: $10.00
                    </label>
                  </li>
                </ul>
                <p className="ms-5">
                  Shipping options will be updated during <br /> checkout.
                </p>
                <span className="ms-5">
                  <i className="fa-solid fa-truck"></i> CALCULATE SHIPPING
                </span>
              </td>
            </tr>
            <tr>
              <th>TOTAL</th>
              <td>
                <strong>${cartTotal}</strong>
              </td>
            </tr>
          </table>
          <Button variant="danger" className="form-control mt-3">
            PROCEED TO CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
