import React, { PureComponent } from "react";
import { GET_PRICE } from "../../gql/gql";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";

function curincy(curincy, label = "USD") {
  return curincy.currency.label === label;
}

export function productPrice(data, lapel) {
  let price = data.product.prices.filter((price) => curincy(price, lapel))[0];
  return { symbol: price.currency.symbol, amount: price.amount };
}

class Price extends PureComponent {
  render() {
    return (
      <Query query={GET_PRICE} variables={{ id: this.props.id }}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;

          return (
            <>
              {productPrice(data, this.props.curincy).symbol +
                productPrice(data, this.props.curincy).amount}
            </>
          );
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
