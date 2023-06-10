import React, { useEffect, useState } from "react";

function Cart({ style, cartProducts }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price whenever the cartProducts prop changes
    const calculateTotalPrice = () => {
      let total = 0;
      cartProducts.forEach((product) => {
        total += product.price;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartProducts]);

  function handleCheckout() {
    alert("Thank you for your purchase");
  }

  return (
    <div id="cart-div" style={style}>
      <div id="cart-list">
        <h3 id="cartHeader">Shopping Cart</h3>
        {cartProducts.map((product) => {
          return (
            <div className="cart-item" key={product.id}>
              <p className="cart-details">
                {product.name} <br />
                {product.price} <br />
              </p>
            </div>
          );
        })}
      </div>
      <section id="checkout">
        <p>Total Price: Kshs.{totalPrice}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </section>
    </div>
  );
}

export default Cart;
