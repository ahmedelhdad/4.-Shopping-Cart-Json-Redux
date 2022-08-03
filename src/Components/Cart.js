import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  remove,
  Quantity,
  decreaseCart,
  getCartTotal,
  clear
} from "../Redux Toolkit/CartSlice";
const Cart = () => {
  const state = useSelector((stata) => stata.cart.Cartitems);
  const totalPrice = useSelector((stata) => stata.cart.totalPrice);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [state]);
  const cartProducts = state.map(({ title, id, img, price, amount }) => {
    return (
      <div className="products-cart" key={id}>
        <div className="product-cart">
          <img src={img} alt={title} />
          <div>
            <h6>{title}</h6>
            <button onClick={() => dispatch(remove({id,title}))}>remove</button>
          </div>
        </div>
        <h5>{price}</h5>
        <div className="Quantity">
          <div>
            <span onClick={() => dispatch(decreaseCart({id,title , amount}))}>-</span>
            <span>{amount}</span>
            <span onClick={() => dispatch(Quantity({id,title}))}>+</span>
          </div>
        </div>
        <h5>{price * amount}</h5>
      </div>
    );
  });
  const GoShopping = () => {
    return (
      <div className="shopping">
        <Link to="/">Go shopping</Link>
        <hr />
      </div>
    );
  };
  return (
    <div className="shopping-cart">
      {state.length >= 1 ? (
        <Fragment>
          <h1>shopping Cart</h1>
          <div className="title">
            <h5>Product</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Total</h5>
          </div>
          {cartProducts}
          <hr/>
          <div className="totalPrice">
          <h3>Total</h3>
          <h3>${totalPrice}</h3>
          </div>
          <button className="clearcart" onClick={() => dispatch(clear()) }>Clear</button>
        </Fragment>
      ) : (
        GoShopping()
      )}
    </div>
  );
};

export default Cart;
