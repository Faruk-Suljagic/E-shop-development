import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./Header";
import "../css/Details.css";

const Details = (props) => {
  const [fetchProd, setProd] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    if (cart.length <= 4) {
      setCart([...cart, { ...products }]);
    } else {
      return;
    }
  };
  const productId = props.match.params.productId;

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProd(res.data);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="ContainerStorage">
        <div className="Image">
          <img
            src={fetchProd.image}
            width="400px"
            height="400px"
            alt={fetchProd.description}
          />
        </div>
        <div className="Information">
          <h3>Product Information:</h3>
          <div className="productInfo">
            <div className="row">
              <div className="makeItRow borderRight">
                <p>Price: {fetchProd.price}</p>
              </div>
              <div className="makeItRow">
                <p>Category: {fetchProd.category}</p>
              </div>
            </div>
            <div className="makeItRow borderTop">
              <h4>Description:</h4>

              <p>{fetchProd.description}</p>
            </div>
          </div>
          <div className="orderButton">
            <button
              className={
                cart.length <= 4 ? "addToCartBtn" : "addToCartBtn noCursor"
              }
              onClick={() => addToCart(cart)}
            >
              Add to Cart ({cart.length})
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
