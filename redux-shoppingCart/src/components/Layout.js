import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let totalPriceArray=0;
  let itemsPrice = useSelector(state=> state.cart.items);
  console.log(itemsPrice)
itemsPrice.forEach(element => {
  totalPriceArray+=element.totalPrice
});

const showCart = useSelector(state=> state.cart.showCart)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${totalPriceArray}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
