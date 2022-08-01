import React, { PureComponent } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import parse from "html-react-parser";
import Attributes from "./Attribute"

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

export default class PDP extends PureComponent {
  state = {
    mainImg: 0,
  };
  render() {
    return (
      <Query query={GET_INFO} variables={{ id: "ps-5" }}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;
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
                <h1>{product.brand}</h1>
                <h4>{product.name}</h4>
                <Attributes attributes={product.attributes} />
                  <div className="info-butt">
                 <h1>ADD TO CART</h1> 
                  </div>
                {parse(product.description)}
              </div>
            </section>
          );
        }}
      </Query>
    );
  }
}
