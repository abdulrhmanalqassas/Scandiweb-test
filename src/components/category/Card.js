import React, { PureComponent } from "react";
import Common from "../../images/Common.png";
import { useNavigate } from "react-router-dom";
import Price from "../price/Price";

class CardN extends PureComponent {
  render() {
    return (
     

      <div
        onClick={() =>
          this.props.navigate("/pdp", { state: { id: this.props.id } })
        }
        className="category-card"
      >
        <div>
          <img
            className="category-card-img"
            src={this.props.gallery[0]}
            alt={this.props.titel}
          />
          <img alt="card-icon" className="category-card-icon" src={Common} />
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
  return (
    <CardN
      // key={props.key}
      // id={props.id}
      // titel={props.name}
      // inStock={props.inStock}
      // gallery={props.gallery}
      {...props}
      navigate={navigate}
    ></CardN>
  );
}

export default Card;
