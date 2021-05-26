import React from "react";

import "./css/App.css";
import Header from "./layout/Header.jsx";
import ImageSlider from "./container/ImageSlider";
import Products from "./layout/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <hr />
      <div className="contents">
        <div className="maxwidth">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
