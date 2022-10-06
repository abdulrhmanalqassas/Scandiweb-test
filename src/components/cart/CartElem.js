import React, { PureComponent } from "react";
import Attributes from "../PDP/Attribute";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";

const GET_INFO = gql`
  query info($id: String!) {
    product(id: $id) {
      brand
      name
      description
      gallery
      attributes {
        name
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;

const showAttributes = (id) => (
  <Query query={GET_INFO} variables={{ id: id }}>
    {({ loading, error, data }) => {
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
      let product = data.product;
      
      return <Attributes product={product} id={id} />;
    }}
  </Query>
);

export class CartElem extends PureComponent {
  state = {
    update: true,
    mainImg: 0,
  };
  render() {
    return (
      <section className="cart">
        <div className="info">
          {showAttributes(this.props.id)}
          
        </div>
        <div className="cart-control">
          <div className="quantity">
            <div
              className="add"
              onClick={() => {
                this.props.increase({ id: this.props.id , value: this.props.cartIds[this.props.id].quantity + 1 });
                this.setState({ state: this.state });
                // this.setState(() => ({ quantity: this.state.quantity + 1 }));
              }}
            >
              +
            </div>
            <p>{this.props.cartIds[this.props.id].quantity}</p>
            <div
              className="subtract"
              onClick={() => {
                this.props.cartIds[this.props.id].quantity > 0 && 
                this.props.decrease({ id: this.props.id, value: this.props.cartIds[this.props.id].quantity - 1 });
                this.setState({ state: this.state });
               
              }}
            >
              -
            </div>
          </div>

          <Query query={GET_INFO} variables={{ id:this.props.id }}>
    {({ loading, error, data }) => {
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
      let product = data.product;
      return (
        <div className="cart-control-img">
        <img alt="product in cart" src={product.gallery[this.state.mainImg]} />
        <div className="cart-control-img-butt">
          {console.log("idddddddddd>>>>>>", this.props.cartIds)}
          <div
            className="prev"
            onClick={() => {
              this.state.mainImg < product.gallery.length-1 && this.setState(() => ({ mainImg: this.state.mainImg + 1 }));
            }}
          >
            &#10094;
          </div>
          <div
            className="next"
            onClick={() => {
              this.state.mainImg > 0 && this.setState(() => ({ mainImg: this.state.mainImg - 1 }));
              console.log("ccccccc",this.state.mainImg)
            }}
          >
            &#10095;
          </div>
        </div>
        <div />
      </div>
      )
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
