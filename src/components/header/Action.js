import { PureComponent } from "react";
import { gql } from "@apollo/client";
import cartIcon from "../../images/cart.png";
import { Query } from "@apollo/client/react/components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MiniCart from "../cart/MiniCart";

const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export class Action extends PureComponent {
  state = {
    showMiniCart :  false
  }
  render() {
    return (
      <div className="nav-action">
        <div className="dropdown">
          <div className="dropbtn">
            $<div className="dropdown-arrow"></div>
          </div>

          <div className="dropdown-content">
            <Query query={GET_CURRENCIES}>
              {({ loading, error, data }) => {
                if (error) return <h1>Error...</h1>;
                if (loading || !data) return <h1>Loading...</h1>;
                const { currencies } = data;
                return currencies.map((elem) => (
                  <div
                    onClick={() => {
                      this.props.switchCurincy(elem.label);
                    }}
                    key={elem.label}
                  >
                    {elem.symbol}
                    {elem.label}
                  </div>
                ));
              }}
            </Query>
          </div>
        </div>
   
       
            <div onClick={()=>{

            }

            } 
            className="nav-cart">
              <img alt="cart" src={cartIcon}></img>
              
            </div>
            {/* { <MiniCart></MiniCart>} */}
          

       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curincy: state.curincyReducer.curincy,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    switchCurincy: (value) => dispatch({ type: "switchCurincy", value: value }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Action);
