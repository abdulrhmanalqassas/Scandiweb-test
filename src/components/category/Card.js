import React, { PureComponent } from "react";
import Common from "../../images/Common.png";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
//prop
// img
// name
// price
// curincy

function curincy(curincy, label = "USD") {
  return curincy.currency.label === label;
}

function productPrice(data,lapel ){
  let price = data.product.prices
  .filter((price) => curincy(price,lapel))[0]
 return (`${price.currency.symbol}${price.amount}`)
   
}

const GET_PRICE = gql`
  query Price($id: String!) {
    product(id: $id) {
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;

export default class Card extends PureComponent {
  render() {
    return (
      <div className="category-card">
        <div>
          <img
            className="category-card-img"
            src={this.props.gallery[0]}
            alt={this.props.titel}
          />
          <img className="category-card-icon" src={Common} />
        </div>

        <h2>{this.props.titel}</h2>
        <Query query={GET_PRICE} variables={{ id: this.props.id }}>
          {({ loading, error, data }) => {
            if (error) return <h1>Error...</h1>;
            if (loading || !data) return <h1>Loading...</h1>;
            return <h1>{productPrice(data,"JPY")}</h1>;
          }}
        </Query>
      </div>
    );
  }
}
