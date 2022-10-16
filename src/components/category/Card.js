import React, { PureComponent } from "react";
import Common from "../../images/Common.png";
import { useNavigate } from "react-router-dom";
import Price from "../price/Price";
import { connect } from "react-redux";

class CardN extends PureComponent {
  render() {
    return (
      <div
        onClick={() =>
          this.props.navigate("/pdp", {
            state: { id: this.props.id, inStock: this.props.inStock },
          })
        }
        className={this.props.inStock ? "category-card" : "category-card "}
      >
        <div></div>
        <div className="category-card-div">
          <img
            className={
              this.props.inStock
                ? " category-card-img"
                : " category-card-img overlay"
            }
            src={this.props.gallery[0]}
            alt={this.props.titel}
          />
          {!this.props.inStock && <p className="overlay-text">OUT OF STOCK</p>}
          {this.props.inStock && (
            <img
              alt="card-icon"
              onClick={() => {
                this.props.add(this.props.id);
              }}
              className="category-card-icon"
              src={Common}
            />
          )}
        </div>
        {/* {console.log("this.props", this.props)} */}
        <h2>{this.props.titel}</h2>
        <Price id={this.props.id}></Price>
      </div>
      // </Link>
    );
  }
}

export function Card(props) {
  const navigate = useNavigate();
  return <CardN {...props} navigate={navigate}></CardN>;
}

const mapStateToProps = (state) => {
  return {
    ids: state.cartReducer.ids,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    add: (value) => dispatch({ type: "add", value: value }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Card);

// export default Card;
