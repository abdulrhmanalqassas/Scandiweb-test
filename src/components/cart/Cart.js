import React, { Component } from "react";
import { connect } from "react-redux";
import CartElem from "./CartElem";
import { Query } from "@apollo/client/react/components";
import { productPrice } from "../price/Price";
import { GET_PRICE } from "../../gql/gql";
import Loading from "../loading/Loading";

export class Cart extends Component {
  state = {
    total: 1,
  };
  shouldComponentUpdate(prevProps, prevState) {
    if ((prevState.total === this.state.total) === 1) {
      return true;
    }
    if (prevProps.quantity !== this.props.quantity) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <>

        {Object.keys(this.props.cartIds).map((id) => {
          return (
            <Query query={GET_PRICE} variables={{ id: id }}>
              {({ loading, error, data }) => {
                if (error) return <h1>Error...</h1>;
                if (loading || !data) return <Loading />;
                let price = productPrice(data, this.props.curincy).amount;
                let n = this.state.total + price * this.props.cartIds[id].quantity;
                this.setState(() => ({ total: n }));
                return <></>;
              }}
            </Query>
          );
        })}
        <h1 className="category-title">Cart</h1>
        {Object.keys(this.props.cartIds).map((id) => {
          return (
            <>
              <CartElem id={id} />
              <hr  ></hr>
            </>
          );
        })}

        <div className="order">
          <h3>Tax 21% : </h3>
          <h3>Quantity :{this.props.quantity}</h3>
          <h3>Total :{parseFloat(this.state.total).toFixed(2)} </h3>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartIds: state.cartReducer.ids,
    quantity: state.cartReducer.total,
    curincy: state.curincyReducer.curincy,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    increase: (value) => dispatch({ type: "increase", value: value }),
    decrease: (value) => dispatch({ type: "decrease", value: value }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Cart);
