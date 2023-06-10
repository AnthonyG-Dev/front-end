import { useState, useEffect } from "react";
import "./displayProducts.css";

const DisplayProducts = ({ style, cartProducts, setCartProducts }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:9292/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (e, product) => {
    e.preventDefault();
    fetch("http://localhost:9292/newcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    setCartProducts([...cartProducts, product]);
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:9292/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addProduct = async () => {
    try {
      const response = await fetch("http://localhost:9292/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      const data = await response.json();
      setProducts([...products, data.product]);
      setNewProduct({ name: "", description: "", price: 0 });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div className="card" style={style}>
      <h2>Products</h2>
      <ul className="card-body">
        {products && products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className="card-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Price: Kshs.{product.price}</p>
              <button onClick={(e) => addToCart(e, product)}>
                Add to cart
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>

      <h2>Add Product</h2>
      <form className="add-product-form" onSubmit={addProduct}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default DisplayProducts;
