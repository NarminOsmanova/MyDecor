import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Footer from "../Components/Footer";
import Contact from "../Pages/Contact";
// import Nopage from "../Pages/Nopage";
import ShopDetails from "../Pages/ShopDetails";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "react-use-cart";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";
import { WishlistProvider } from "react-use-wishlist";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <ProductProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
              <Route path="/products/:url" element={<ShopDetails />}></Route>
              {/* <Route path="*" element={<Nopage />}></Route> */}
            </Routes>
            <Footer />
          </ProductProvider>
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
