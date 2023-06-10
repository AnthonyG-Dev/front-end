import "./App.css";
import Navbar from "./navbar";
import Cart from "./cart";
import DisplayProducts from "./displayProducts";
import { useState, useEffect } from "react";
import Footer from "./footer";

function App() {
  const [cartStyle, setHomeStyle] = useState({ display: "none" });
  const [homeStyle, setCartStyle] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/carts")
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data.products);
      });
  }, []);

  return (
    <div className="App">
      <Navbar setCartStyle={setCartStyle} setHomeStyle={setHomeStyle} />
      <DisplayProducts
        style={homeStyle}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <Cart style={cartStyle} cartProducts={cartProducts} />
      <Footer />
    </div>
  );
}

export default App;
