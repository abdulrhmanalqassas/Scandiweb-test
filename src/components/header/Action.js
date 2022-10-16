import { PureComponent } from "react";
import cartIcon from "../../images/cart.png";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import MiniCart from "../cart/MiniCart";
import { GET_CURRENCIES } from "../../gql/gql";

export class Action extends PureComponent {
  state = {
    showMiniCart: false,
  };

  render() {
    
      if (document.getElementById("all") !== null) {
        if (this.state.showMiniCart) {
          document.getElementById("all").className = "overlay";
        } else {
          document.getElementById("all").className = "";
        }
      }
    
    return (
      <>
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

          <div
            onClick={() => {
              this.setState(() => ({ showMiniCart: !this.state.showMiniCart }));
              console.log(this.state.showMiniCart);
            }}
            className="nav-cart"
          >
            <img alt="cart" src={cartIcon}></img>
          </div>
        </div>
        {this.state.showMiniCart && <MiniCart></MiniCart>}
      </>
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
