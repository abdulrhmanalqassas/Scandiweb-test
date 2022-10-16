import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CartElem from "./CartElem";
import { Link } from "react-router-dom";

export class MiniCart extends PureComponent {
  render() {
    return (
      <div className="container-mini-cart">
        {Object.keys(this.props.cartIds).length > 0 ? (
          Object.keys(this.props.cartIds).map((id) => {
            return (
              <div className="mini-cart-elem">
                <CartElem parent={"mini-cart"} id={id} />
              </div>
            );
          })
        ) : (
          <h5>try to get some cool product</h5>
        )}
        <div className="mini-cart-footer">
          <Link to={"/cart"} className="lime">
            {" "}
            <div className="cart-mini-butt lime">go to cart</div>
          </Link>
          <div className="cart-mini-butt">check out </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartIds: state.cartReducer.ids,
    quantity: state.cartReducer.total,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    increase: (value) => dispatch({ type: "increase", value: value }),
    decrease: (value) => dispatch({ type: "decrease", value: value }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(MiniCart);
