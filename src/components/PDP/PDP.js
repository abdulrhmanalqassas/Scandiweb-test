import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import parse from "html-react-parser";
import Attributes from "./Attribute";
import { useLocation } from "react-router-dom";
import CartButt from "../cart/CartButt";
import { DeleteButt } from "../cart/CartButt";
import { GET_INFO } from "../../gql/gql";
import Loading from "../loading/Loading";

class PDPN extends PureComponent {
  state = {
    mainImg: 0,
  };
  render() {
    return (
      <Query query={GET_INFO} variables={{ id: this.props.location.state.id }}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <Loading />;
          let product = data.product;
          return (
            <section className="PDP">
              <div className="row">
                {product.gallery.map((img, i) => {
                  return (
                    <div className="column">
                      <img
                        src={img}
                        alt="product img"
                        onClick={() => {
                          this.setState(() => ({ mainImg: i }));
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="main-img">
                <img
                  width={"610px"}
                  className="category-card-img"
                  src={product.gallery[this.state.mainImg]}
                  alt={"any"}
                />
              </div>

              <div className="info">
                <Attributes
                  id={this.props.location.state.id}
                  parent={"PDP"}
                  product={product}
                />
                {console.log("ididididid", this.props.location.state.id)}

                {this.props.location.state.inStock ? (
                  <>
                    <CartButt id={this.props.location.state.id}></CartButt>
                    <DeleteButt id={this.props.location.state.id}></DeleteButt>
                  </>
                ) : (
                  <div className="info-butt out">OUT OF STOCK</div>
                )}
                <div className="product-description">
                  {parse(product.description)}
                </div>
              </div>
            </section>
          );
        }}
      </Query>
    );
  }
}

export default function PDP(props) {
  const location = useLocation();
  return <PDPN {...props} location={location}></PDPN>;
}
