import React, { PureComponent } from "react";
import Attributes from "../PDP/Attribute";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { GET_INFO } from "../../gql/gql";
import Loading from "../loading/Loading";

const showAttributes = (id, mini = false) => (
  <Query query={GET_INFO} variables={{ id: id }}>
    {({ loading, error, data }) => {
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
      let product = data.product;

      return (
        <Attributes
          parent={mini ? "mini-cart" : "Cart"}
          product={product}
          id={id}
        />
      );
    }}
  </Query>
);

export class CartElem extends PureComponent {
  state = {
    update: true,
    mainImg: 0,
  };
  render() {
    let mini = this.props.parent === "mini-cart";
    return (
      <section className={mini ? "mini-cart" : "cart"}>
        <div className={mini ? "mini-info" : "info"}>
          {showAttributes(this.props.id, mini)}
        </div>
        <div className={mini ? "mini-cart-control" : "cart-control"}>
          <div className={mini ? "mini-quantity" : "quantity"}>
            <div
              className={mini ? "mini-add" : "add"}
              onClick={() => {
                this.props.increase({
                  id: this.props.id,
                  value: this.props.cartIds[this.props.id].quantity + 1,
                });
                this.setState({ state: this.state });
                // this.setState(() => ({ quantity: this.state.quantity + 1 }));
              }}
            >
              +
            </div>
            <p>{this.props.cartIds[this.props.id].quantity}</p>
            <div
              className={mini ? "mini-subtract" : "subtract"}
              onClick={() => {
                this.props.cartIds[this.props.id].quantity > 0 &&
                  this.props.decrease({
                    id: this.props.id,
                    value: this.props.cartIds[this.props.id].quantity - 1,
                  });
                this.setState({ state: this.state });
              }}
            ></div>
          </div>

          <Query query={GET_INFO} variables={{ id: this.props.id }}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <Loading />;
              let product = data.product;
              return (
                <div
                  className={
                    mini ? "mini-cart-controler-img" : "cart-control-img "
                  }
                >
                  <img
                    alt="product in cart"
                    src={product.gallery[this.state.mainImg]}
                  />
                  {!mini && (
                    <div className="cart-control-img-butt">
                      <div
                        className={mini ? "mini-prev" : "prev"}
                        onClick={() => {
                          this.state.mainImg < product.gallery.length - 1 &&
                            this.setState(() => ({
                              mainImg: this.state.mainImg + 1,
                            }));
                        }}
                      >
                        &#10094;
                      </div>
                      <div
                        className={mini ? "mini-next" : "next"}
                        onClick={() => {
                          this.state.mainImg > 0 &&
                            this.setState(() => ({
                              mainImg: this.state.mainImg - 1,
                            }));
                          // console.log("ccccccc",this.state.mainImg)
                        }}
                      >
                        &#10095;
                      </div>
                    </div>
                  )}
                  {/* <div /> */}
                </div>
              );
            }}
          </Query>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartIds: state.cartReducer.ids,
    Attributes: state.attributeReducer.ids,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    increase: (value) => dispatch({ type: "increase", value: value }),
    decrease: (value) => dispatch({ type: "decrease", value: value }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(CartElem);
