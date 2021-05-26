import React from "react";
import { BrowserRouter as useHistory } from "react-router-dom";
import "../css/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  menuButton = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  render() {
    return (
      <div className="Container">
        <nav className="navBar">
          <div className="btns">
            <button className="btn">View Products</button>
          </div>
          <p className="logo">SAVOY</p>
          <div className="btns">
            <button className="btn">Cart</button>
          </div>
          <div className="burgerBtn" onClick={this.menuButton}>
            <div className="spans">
              <p className="spanLines" />
              <p className="spanLines" />
              <p className="spanLines" />
            </div>
            <div
              className={
                this.state.menu === false
                  ? "menuBtns disabled"
                  : "menuBtns enabled"
              }
            >
              <button>View Products</button>
              <button>Cart</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
