import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CartElem from "./CartElem";


export class MiniCart extends PureComponent {
    render() { 
      return (
        <div className="mini-cart">
        
        { Object.keys(this.props.cartIds).length >0 ? Object.keys(this.props.cartIds).map((id) => {
            return (
              <>
                <CartElem  parent={"mini-cart"} id={id} />
                <hr></hr>
              </>
            );
          }) : <h1></h1> }
         
        </div>
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
  
  export default connect(mapStateToProps, mapDispachToProps)(MiniCart);
  