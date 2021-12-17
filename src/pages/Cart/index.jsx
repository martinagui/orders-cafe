import React from "react";
import Logo from "components/common/Logo";
import Menu from "components/common/Menu";

import "./styles.css";
import Footer from "components/common/Footer";
import EmptyCart from "components/Cart/EmptyCart";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "redux/cart/cart.selector";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  console.log(cartCount, cartList, cartTotal);
  return (
    <div>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-header">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your total ${cartTotal.toFixed(2)}</h3>
        </div>
      )}

      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
