import React, { PureComponent } from "react";
import Attributes from "../PDP/Attribute";
import Common from "../../images/Common.png";
let product = {
  "__typename": "Product",
  "brand": "Sony",
  "name": "PlayStation 5",
  "description": "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>",
  "gallery": [
    "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
  ],
  "attributes": [
    {
      "__typename": "AttributeSet",
      "name": "Color",
      "items": [
        {
          "__typename": "Attribute",
          "displayValue": "Green",
          "value": "#44FF03",
          "id": "Green"
        },
        {
          "__typename": "Attribute",
          "displayValue": "Cyan",
          "value": "#03FFF7",
          "id": "Cyan"
        },
        {
          "__typename": "Attribute",
          "displayValue": "Blue",
          "value": "#030BFF",
          "id": "Blue"
        },
        {
          "__typename": "Attribute",
          "displayValue": "Black",
          "value": "#000000",
          "id": "Black"
        },
        {
          "__typename": "Attribute",
          "displayValue": "White",
          "value": "#FFFFFF",
          "id": "White"
        }
      ]
    },
    {
      "__typename": "AttributeSet",
      "name": "Capacity",
      "items": [
        {
          "__typename": "Attribute",
          "displayValue": "512G",
          "value": "512G",
          "id": "512G"
        },
        {
          "__typename": "Attribute",
          "displayValue": "1T",
          "value": "1T",
          "id": "1T"
        }
      ]
    }
  ]
}

export default class Cart extends PureComponent {
  state = {
    quantity: 1,
  };
  render() {
    return (
      <section className="cart">
        <div className="info">
          
          
          <Attributes product={product} />
          
        </div>
        <div className="cart-control">
          <div className="quantity">
            <div
              className="add"
              onClick={() => {
                this.setState(() => ({ quantity: this.state.quantity + 1 }));
              }}
            >
              +
            </div>
            <p>{this.state.quantity}</p>
            <div
              className="subtract"
              onClick={() => {
                this.state.quantity > 0 &&
                this.setState(() => ({ quantity: this.state.quantity - 1 }));
              }}
            >
              -
            </div>
          </div>
          <div className="cart-control-img">
            <img alt="product in cart" src={Common} />
            <div className="cart-control-img-butt">
              <div
                className="prev"
                onClick={() => {
                  console.log("oress");
                }}
              >
                &#10094;
              </div>
              <div
                className="next"
                onClick={() => {
                  console.log("oress");
                }}
              >
                &#10095;
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>
    );
  }
}
