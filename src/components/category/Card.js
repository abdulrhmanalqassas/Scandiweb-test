import React, { PureComponent } from "react";
import Common from "../../images/Common.png";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
//prop
// img
// name
// price

const GET_PRICE = gql`
  query {
    product(id: "huarache-x-stussy-le") {
      prices {
        currency {
          label
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
        <Query query={GET_PRICE}>


        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;
          {console.log(">>>>>>>>>>>",data.product.prices[0].amount)}
                return(
                    <h1>
                    {data.product.prices[0].amount}
                </h1>
                )
                
        }}

        </Query>
       
      </div>
    );
  }
}
