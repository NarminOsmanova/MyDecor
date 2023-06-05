import React from "react";
import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const { addItem } = useCart();
  const { items, removeWishlistItem, isWishlistEmpty } = useWishlist();
  const notify = () =>
    toast.info("Product successfully removed", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return isWishlistEmpty ? (
    <div className="wishlist container my-5">
      <div className="mb-2">
        <LinkContainer to="/">
          <span>Home </span>
        </LinkContainer>
        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <span className="ms-2">Wishlist</span>
      </div>
      <h2 className="fw-bolder my-5">Mydecor</h2>

      <Table>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>UNIT PRICE</th>
            <th>STOCK STATUS</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-secondary">
              No products added to the wishlist
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  ) : (
    <div className="wishlist container my-5">
      <div className="mb-2">
        <LinkContainer to="/">
          <span>Home </span>
        </LinkContainer>
        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <span className="ms-2">Wishlist</span>
      </div>
      <h2 className="fw-bolder my-5">Mydecor</h2>

      <Table>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>UNIT PRICE</th>
            <th>STOCK STATUS</th>
            <th>ADD TO CART</th>
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
                  />
                  <span>{item.title}</span>{" "}
                </td>
                <td>${item.price}</td>
                <td>{item.status ? "In Stock" : "Out of Stock"}</td>
                <td>
                  {item.status ? (
                    <button
                      onClick={() => {
                        removeWishlistItem(item.id);
                        addItem(item);
                      }}
                      className="btn btn-dark"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button className="btn btn-dark">Not Available</button>
                  )}
                </td>
                <td>
                  <span
                    onClick={() => {
                      notify(removeWishlistItem(item.id));
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
      <div className="icon">
        <p>SHARE ON:</p>
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
        <a href="mailto:test@example.com?subject=Testing out mailto!">
          <span>
            <i className="fa-regular fa-envelope"></i>
          </span>
        </a>
        <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
          <span>
            <i className="fa-brands fa-whatsapp"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Wishlist;
