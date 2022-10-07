import React, { PureComponent } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";

function curincy(curincy, label = "USD") {
  return curincy.currency.label === label;
}

function productPrice(data, lapel) {
  let price = data.product.prices.filter((price) => curincy(price, lapel))[0];
  // return `${price.currency.symbol}${price.amount}`;
  return {symbol : price.currency.symbol,amount: price.amount}
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

class Price extends PureComponent {
  render() {
    return (
      <Query query={GET_PRICE} variables={{ id: this.props.id }}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;
      
          return <>{productPrice(data, this.props.curincy).symbol + productPrice(data, this.props.curincy).amount }</> ;
        }}
      </Query>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    curincy: state.curincyReducer.curincy,
  };
};

export default connect(mapStateToProps)(Price);

