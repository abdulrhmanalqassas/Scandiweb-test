import { PureComponent } from "react";
import { gql } from "@apollo/client";
import cartIcon from "../../images/cart.png";
import { Query, Mutation, Subscription } from "@apollo/client/react/components";
import { graphql } from "@apollo/client/react/hoc";

const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export class Action extends PureComponent {
  render() {
    return (
      <div className="nav-action">
        <div className="dropdown">
          <div className="dropbtn">$<div className="dropdown-arrow"></div></div>
          
          <div className="dropdown-content">
            <Query query={GET_CURRENCIES}>
              {({ loading, error, data }) => {
                if (error) return <h1>Error...</h1>;
                if (loading || !data) return <h1>Loading...</h1>;
                console.log(data);
                const { currencies } = data;

                return currencies.map((elem) => (
                  <div key={elem.label}>
                    {elem.symbol}
                    {elem.label}
                  </div>
                ));
              }}
            </Query>
          </div>

        </div>
        
       <div  className="nav-cart"><img alt="cart" src={cartIcon}></img></div> 
      </div>
    );
  }
}

export default Action;
