import React, { PureComponent } from "react";
import Attributes from "../PDP/Attribute";
import Common from "../../images/Common.png";
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



const t =(id) => <Query query={GET_INFO} variables={{ id: id }}>
{({ loading, error, data }) => {
  if (error) return <h1>Error...</h1>;
  if (loading || !data) return <h1>Loading...</h1>;
  let product = data.product;
  return (<Attributes product={product}  id={id}/>)}}
</Query>



export  class Cart extends PureComponent {
  state = {
    quantity: 1,
  };
 
  render() {
    return (
      <section className="cart">
        <div className="info">
         
         
          
          {t(Object.keys(this.props.cartIds)[0])}
        </div>
        <div className="cart-control">
          <div className="quantity">
            <div
              className="add"
              onClick={() => {
                this.setState(() => ({ quantity: this.state.quantity + 1 }));
              }}
            >
              +
            </div>
            <p>{this.state.quantity}</p>
            <div
              className="subtract"
              onClick={() => {
                this.state.quantity > 0 &&
                this.setState(() => ({ quantity: this.state.quantity - 1 }));
              }}
            >
              -
            </div>
          </div>
          <div className="cart-control-img">
            <img alt="product in cart" src={Common} />
            <div className="cart-control-img-butt">
              {console.log("idddddddddd>>>>>>",this.props.ids)}
              <div
                className="prev"
                onClick={() => {
                  console.log("oress");
                }}
              >
                &#10094;
              </div>
              <div
                className="next"
                onClick={() => {
                  console.log("oress");
                }}
              >
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


const mapStateToProps = (state) => {
    return {
     cartIds: state.cartReducer.ids,
     Attributes:state.attributeReducer.ids,
    };
  };

export default connect(mapStateToProps)(Cart);