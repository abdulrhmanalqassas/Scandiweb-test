import React, { PureComponent } from "react";
// import Attributes from "../PDP/Attribute";
import Common from "../../images/Common.png";
export default class Cart extends PureComponent {
  render() {
    return (
      <section className="cart">
        <div className="info">
          <h1>appolo</h1>
          <h4>runing short</h4>
          {/* <Attributes/> */}
          <h2>price : amunt = pric* num hhhh</h2>
        </div>
        <div className="cart-control">
        <div className="quantity" >
        <div className="add" onClick={()=>{console.log("oress")}}>
              +
            </div>
            <p>
                1
            </p>
            <div className="subtract" onClick={()=>{console.log("oress")}}>
              -
            </div>
        </div>
          <div className="cart-control-img">
            <img alt="product in cart" src={Common} />
            <div className="cart-control-img-butt">
            <div className="prev" onClick={()=>{console.log("oress")}}>
              &#10094;
            </div>
            <div className="next" onClick={()=>{console.log("oress")}}>
              &#10095;
            </div>
            </div>
            <div />
          </div>
        </div>
      </section>
    );
  }
}
