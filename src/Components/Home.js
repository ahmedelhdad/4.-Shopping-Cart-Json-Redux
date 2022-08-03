import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {addToCart,getCartTotal} from '../Redux Toolkit/CartSlice'

const Home = () => {
  const state = useSelector((state) => state.cart.items);
  const Cartitems = useSelector((state) => state.cart.Cartitems);
useEffect(() => {
  dispatch(getCartTotal(Cartitems))
},[Cartitems])

  const dispatch = useDispatch()
  const handlerCart = (products) => 
  {
    dispatch(addToCart(products))
  }
  const fetchProducts = state.map((products) => {
    return (
      <div className="product" key={products.id}>
        <div className="image">
          <img src={products.img} alt={products.title} />
        </div>
        <div className="text">
          <h1>{products.title.substring(0, 12)}</h1>
          <h1>price: {products.price}</h1>
          <div className="cart">
            <button onClick={() => handlerCart(products)}>Add Cart</button>
            <Link to="/cart">Get Cart</Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="products">
      <div className="container ">{fetchProducts}</div>
    </div>
  );
};

export default Home;
