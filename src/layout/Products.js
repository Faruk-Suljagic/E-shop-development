import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Products.css";

const Products = (props) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  console.log(cart);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);

        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  return (
    <div className="container">
      <p className="prods">Products</p>
      <p className="currentTime">
        Current time:
        <br />
        {`${new Date().getHours()}`}:{`${new Date().getMinutes()}`};
        {`${new Date().getSeconds()}`}
      </p>
      <h4 className="viewProd">Click on product to View It and Order it !</h4>

      <div className="wrapper">
        {product.map((products) => (
          <React.Fragment key={products.id}>
            <Link className="prodCard" to={`/product/${products.id}`}>
              <div key={products.id}>
                <p className="price">${products.price}</p>
                <div className="prodImage">
                  <img
                    src={products.image}
                    width="200px"
                    height="200px"
                    alt={products.title}
                  />
                </div>
                <p className="category">{products.category}</p>
                <p className="description">{products.description}</p>
                <div className="orderBtn"></div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;
