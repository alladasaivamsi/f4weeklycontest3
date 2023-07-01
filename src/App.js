import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductListing from "./components/Main/ProductListing";
import Cart from "./components/Main/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing}></Route>
          <Route path="/cart" Component={Cart}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
