import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import NoFound from './Components/NoFound'
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
