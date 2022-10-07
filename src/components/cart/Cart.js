import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CartElem from "./CartElem";

export class Cart extends PureComponent {
  render() { 
    return (
      <>
        {Object.keys(this.props.cartIds).map((id) => {
          return (
            <>
              <CartElem id={id} />
              <hr></hr>
            </>
          );
        })}
        <div className="order">
          <h3>Tax 21% : </h3>
          <h3>Quantity :{this.props.quantity}</h3>
          {console.log("jjjjjjjjjj",this.props.quantity)}
          <h3>Total : </h3>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartIds: state.cartReducer.ids,
    quantity:state.cartReducer.total,
    
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    increase: (value) => dispatch({ type: "increase", value: value }),
    decrease: (value) => dispatch({ type: "decrease", value: value }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Cart);
